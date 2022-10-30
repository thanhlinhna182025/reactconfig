import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faSignIn, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import styles from '~/layouts/components/Header/Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button/Button';
import Menu from '~/components/Popper/Menu/Menu';
import { MENU_DATA, USER_MENU } from '~/data';
import { InBoxIcon, SentMessage, AddIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '~/components/Search/Search';
import config from '~/configs';

function Header() {
  const currentUser = true;

  let cx = classNames.bind(styles);

  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        //Hande languse
        break;
      default:
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="douyin" />
        </Link>
        <Search />
        <div className={cx('actions')}>
          <Button
            outline
            className={cx('custom-upload')}
            leftIcon={<AddIcon className="add-icon" width="1.6rem" height="1.6rem" />}
          >
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Inbox" placement="bottom" delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <InBoxIcon className="inbox-icon" />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom" delay={[0, 200]}>
                <button className={cx('action-btn')}>
                  <SentMessage className="sent-message-icon" />
                </button>
              </Tippy>
              <Menu items={USER_MENU} onChange={handleMenuChange}>
                <button className={cx('action-btn')}>
                  <Image
                    className={cx('avata')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1666947600&x-signature=7%2FsJV0f4aH2x6FAwqymc0u7iyww%3D"
                    alt="TruongTuanThanh"
                    fallback={images.userAvata}
                  />
                </button>
              </Menu>
            </>
          ) : (
            <>
              <Button to="/" primary className={cx('custom-login')} leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
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
