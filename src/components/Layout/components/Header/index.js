import classNames from 'classnames/bind';
import styles from './Header.module.scss';
let cx = classNames.bind(styles);
function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>Header</div>
    </header>
  );
}

export default Header;
