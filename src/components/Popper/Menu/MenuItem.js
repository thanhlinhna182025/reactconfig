import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
  const classes = cx('menu-item', { separate: item.separate });
  return (
    <Button onClick={onClick} leftIcon={item.icon} to={item.to} className={classes}>
      {item.title}
    </Button>
  );
}

export default MenuItem;
