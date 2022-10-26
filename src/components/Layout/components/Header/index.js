import { useState, useEffect } from 'react';
import HeadLessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCircleXmark,
  faSpinner,
  faSignIn,
  faEllipsisVertical,
  faMessage,
  faInbox,
  faAdd,
  faQuestionCircle,
  faUser,
  faCoins,
  faGear,
  faVideoSlash,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from '~/components/Layout/components/Header/Header.module.scss';
import images from '~/assets/images';
import SearchItem from '~/components/SearchItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { MENU_DATA } from '~/data';

function Header() {
  const currentUser = true;
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);
  let cx = classNames.bind(styles);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Hande languse
        break;
      default:
    }
  };
  const USER_MENU = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/user' },
    { icon: <FontAwesomeIcon icon={faVideoSlash} />, title: 'LIVE studio', to: '/live' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/setting' },
    ...MENU_DATA,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
  ];
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <a className={cx('logo')}>
          <img src={images.logo} alt="douyin" />
        </a>
        <HeadLessTippy
          // visible={searchResult.length > 0}
          trigger="click"
          interactive={true}
          placement="bottom-end"
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                <SearchItem />
                <SearchItem />
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
        </HeadLessTippy>
        <div className={cx('actions')}>
          <Button outline className={cx('custom-upload')} leftIcon={<FontAwesomeIcon icon={faAdd} />}>
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faInbox} />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
              <Menu items={USER_MENU} onChange={handleMenuChange}>
                <button className={cx('action-btn')}>
                  <img
                    className={cx('avata')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1666947600&x-signature=7%2FsJV0f4aH2x6FAwqymc0u7iyww%3D"
                    alt="Truong Tuan Thanh"
                  />
                </button>
              </Menu>
            </>
          ) : (
            <>
              <Button outline className={cx('custom-login')} leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Login
              </Button>
              <Menu items={MENU_DATA} onChange={handleMenuChange}>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
