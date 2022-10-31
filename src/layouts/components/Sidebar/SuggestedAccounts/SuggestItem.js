import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function SuggestItem() {
  return (
    <div>
      <Tippy
        interactive
        placement="bottom"
        offset={[-20, 0]}
        delay={[1000, 0]}
        render={() => {
          return (
            <PopperWrapper>
              <div className={cx('preview')}>
                <div className={cx('top')}>
                  <span className={cx('preview-avatar')}>
                    <Image
                      src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667368800&x-signature=7bJNrToy%2Bd%2BZOWj5msDadcrH4H4%3D"
                      alt="theanh28entertainment"
                    />
                  </span>
                  <Button primary className={cx('custom-follow')}>
                    Follow
                  </Button>
                </div>
                <div className={cx('body')}>
                  <div className={cx('info')}>
                    <h4 className={cx('name')}>Theanh28entertainment</h4>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <p className={cx('full-name')}>the anh28 entertainment</p>
                </div>
                <div className={cx('bottom')}>
                  <strong>7.8M</strong>
                  <span>Followers</span>
                  <strong>557.9M</strong>
                  <span>Likes</span>
                </div>
              </div>
            </PopperWrapper>
          );
        }}
      >
        <div className={cx('suggest-item')}>
          <span className={cx('avatar')}>
            <Image
              src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667368800&x-signature=7bJNrToy%2Bd%2BZOWj5msDadcrH4H4%3D"
              alt="theanh28entertainment"
            />
          </span>
          <div>
            <div className={cx('info')}>
              <h4 className={cx('name')}>Theanh28entertainment</h4>
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <p className={cx('full-name')}>the anh28 entertainment</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default SuggestItem;
