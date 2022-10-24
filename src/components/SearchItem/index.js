import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';

const cx = classNames.bind(styles);

function SearchItem() {
  return (
    <div className={cx('search-item')}>
      <span className={cx('avatar')}>
        <img src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d7ac764c14f5fa6a7664fda6e57d384c~c5_300x300.webp?x-expires=1666771200&x-signature=BAkEFdsmac18lVvhhfyRaouhp0E%3D" />
      </span>
      <div>
        <div className={cx('name')}>
          <h4>Truong Tuan Thanh</h4>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <span className={cx('account')}>thanhlinhna</span>
      </div>
    </div>
  );
}

export default SearchItem;
