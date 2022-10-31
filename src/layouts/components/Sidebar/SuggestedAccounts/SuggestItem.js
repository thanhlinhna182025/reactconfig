import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function SuggestItem({ account }) {
  return (
    <div className={cx('suggest-item')}>
      <span className={cx('avatar')}>
        <Image src={account.avatar} alt={account.nickname} />
      </span>
      <div>
        <div className={cx('info')}>
          <h4 className={cx('name')}>{account.nickname}</h4>
          {account.tick && <FontAwesomeIcon icon={faCheckCircle} />}
        </div>
        <p className={cx('full-name')}>{account.full_name}</p>
      </div>
    </div>
  );
}

export default SuggestItem;
