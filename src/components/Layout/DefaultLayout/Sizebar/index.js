import classNames from 'classnames/bind';
import styles from './Sizebar.module.scss';

const cx = classNames.bind(styles);
function Sizebar() {
  return <aside className={cx('wrapper')}>Sizebar</aside>;
}

export default Sizebar;
