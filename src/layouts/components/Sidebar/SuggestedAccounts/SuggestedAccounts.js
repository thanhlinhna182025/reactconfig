import classNames from 'classnames/bind';

import styles from './SuggestedAccounts.module.scss';
import SuggestItem from './SuggestItem';

const cx = classNames.bind(styles);
function SuggestedAccounts({ title, data }) {
  return (
    <div className={cx('suggested-accounts')}>
      <p className={cx('title')}>{title}</p>
      {data.map((account) => (
        <SuggestItem account={account} key={account.id} />
      ))}
      <p className={cx('btn-more')}>See more</p>
    </div>
  );
}

export default SuggestedAccounts;
