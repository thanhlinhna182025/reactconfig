import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import SuggestItem from './SuggestItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ title }) {
  return (
    <div className={cx('suggested-accounts')}>
      <p className={cx('title')}>{title}</p>
      <SuggestItem />
      <p className={cx('btn-more')}>See more</p>
    </div>
  );
}

export default SuggestedAccounts;
