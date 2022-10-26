import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  return (
    <Button onClick={onClick} leftIcon={item.icon} to={item.to} className={cx('custom-button-menu-item')}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
