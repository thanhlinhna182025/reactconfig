import { useState, useEffect, useRef } from 'react';

import HeadLessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import SearchItem from '~/components/SearchItem';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon, LoadingIcon, ClearIcon } from '~/components/Icons';

function Search() {
  const cx = classNames.bind(styles);
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (!searchText.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchText)}&type=less`)
      .then((data) => data.json())
      .then((results) => {
        setSearchResult(results.data);
        setLoading(false);
      });
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleClear = () => {
    setSearchText('');
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  return (
    <HeadLessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      placement="bottom-end"
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            {searchResult.map((result) => (
              <SearchItem data={result} key={result.id} />
            ))}
          </PopperWrapper>
        </div>
      )}
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
  );
}

export default Search;
