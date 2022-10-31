import { useState, useEffect, useRef } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useDebounce } from '~/hooks';
import SearchItem from '~/components/SearchItem/SearchItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon, LoadingIcon, ClearIcon } from '~/components/Icons/Icons';
import { search } from '~/services/searchService';

function Search() {
  const cx = classNames.bind(styles);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  const debounce = useDebounce(searchText, 500);

  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    const searchApi = async () => {
      const response = await search(debounce);
      // Tam thoi su dung
      if (typeof response === 'undefined') {
        setSearchResult([]);
        setSearchText('');
        setLoading(false);
        return;
      }
      // Tam thoi su dung
      setSearchResult(response);
      setLoading(false);
    };
    searchApi();
  }, [debounce]);

  const handleChange = (e) => {
    const text = e.target.value;
    if (!text.startsWith(' ')) {
      setSearchText(text);
    }
  };
  const handleClear = () => {
    setSearchText('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const renderResults = (attrs) => (
    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        <h4 className={cx('search-title')}>Account</h4>
        {searchResult.map((result) => (
          <SearchItem data={result} key={result.id} />
        ))}
      </PopperWrapper>
    </div>
  );
  return (
    <div>
      <HeadLessTippy
        visible={showResult && searchResult.length > 0}
        interactive={true}
        placement="bottom-end"
        onClickOutside={handleHideResult}
        render={renderResults}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            placeholder="Tìm kiếm"
            spellCheck={false}
            value={searchText}
            onChange={handleChange}
            onFocus={() => {
              setShowResult(true);
            }}
          />
          <div className={cx('icon')}>
            {!!searchText && (
              <button className={cx('clear')} onClick={handleClear}>
                <ClearIcon className="clear-icon" />
              </button>
            )}
            {loading && (
              <button className={cx('loading')} width="100%" height="100%">
                <LoadingIcon className="loading-icon" />
              </button>
            )}
          </div>
          <button className={cx('search-btn')}>
            <SearchIcon className={cx('search-icon')} />
          </button>
        </div>
      </HeadLessTippy>
    </div>
  );
}

export default Search;
