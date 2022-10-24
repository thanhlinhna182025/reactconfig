import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  primary = false,
  outline = false,
  rounded = false,
  text = false,
  disabled = false,
  small = false,
  large = false,
  to,
  link,
  href,
  children,
  className,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  let Comp = 'button';
  let _props = { onClick, ...passProps };
  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = 'a';
  }
  // Remove enventlistener when disabled button
  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] === 'function') {
        delete _props[key];
      }
    });
  }
  let classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    rounded,
    text,
    disabled,
    small,
    large,
    leftIcon,
    rightIcon,
  });
  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
