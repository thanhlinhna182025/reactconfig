import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, icon, activeIcon, to }) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to} end>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('icon-active')}>{activeIcon}</span>
      {title}
    </NavLink>
  );
}

export default MenuItem;
