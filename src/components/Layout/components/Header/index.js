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
  faEllipsisVertical,
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from '~/components/Layout/components/Header/Header.module.scss';
import images from '~/assets/images';
import SearchItem from '~/components/SearchItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

let cx = classNames.bind(styles);
const MENU_DATA = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'china', title: 'Chinese' },
        {
          type: 'language',
          code: 'en',
          title: 'English',
          children: {
            title: 'Language',
            data: [
              { type: 'language', code: 'vi', title: 'Tiếng Việt 2' },
              { type: 'language', code: 'china', title: 'Chinese 2' },
              {
                type: 'language',
                code: 'en',
                title: 'English 2',
                children: {
                  title: 'Language',
                  data: [
                    { type: 'language', code: 'vi', title: 'Tiếng Việt 3' },
                    { type: 'language', code: 'china', title: 'Chinese 3' },
                    { type: 'language', code: 'en', title: 'English 3' },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Danh ba',
    children: {
      title: 'Danh ba',
      data: [
        { type: 'co quan', code: 'vi', title: 'Tiếng Việt' },
        { type: 'co quan', code: 'china', title: 'Chinese' },
        {
          type: 'co quan',
          code: 'en',
          title: 'English',
          children: {
            title: 'Language',
            data: [
              { type: 'language', code: 'vi', title: 'Tiếng Việt 2' },
              { type: 'language', code: 'china', title: 'Chinese 2' },
              {
                type: 'language',
                code: 'en',
                title: 'English 2',
                children: {
                  title: 'Language',
                  data: [
                    { type: 'language', code: 'vi', title: 'Tiếng Việt 3' },
                    { type: 'language', code: 'china', title: 'Chinese 3' },
                    { type: 'language', code: 'en', title: 'English 3' },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faQuestionCircle} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];
const handleMenuChange = (menuItem) => {
  switch (menuItem.type) {
    case 'language':
      //Hande languse
      break;
    default:
  }
};
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
        <Tippy
          visible={searchResult.length > 0}
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
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary className={cx('custom-login')} leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Login
          </Button>
          <Menu items={MENU_DATA} onChange={handleMenuChange}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
