import { useState, useEffect } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCircleXmark,
  faSpinner,
  faLongArrowAltRight,
  faLongArrowLeft,
  faSignIn,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import SearchItem from '~/components/SearchItem';
import Button from '~/components/Button';
let cx = classNames.bind(styles);

function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <a className={cx('logo')}>
          <img src={images.logo} alt="douyin" />
        </a>
        <div>
          <Tippy
            visible={searchResult.length > 0}
            zIndex="999"
            interactive={true}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx('search-title')}>Account</h4>
                  <SearchItem />
                </PopperWrapper>
              </div>
            )}
          >
            <div className={cx('search')}>
              <input placeholder="Tìm kiếm" spellCheck={false} />
              <div className={cx('icon')}>
                <button className={cx('clear')}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={cx('loading')}>
                  <FontAwesomeIcon icon={faSpinner} />
                </button>
              </div>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </Tippy>
        </div>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button
            outline
            rounded
            className={cx('custom-login')}
            leftIcon={<FontAwesomeIcon icon={faSignIn} />}
            rightIcon={<FontAwesomeIcon icon={faSignOut} />}
          >
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
