import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
  const [fallback, setFallback] = useState('');
  const cx = classNames.bind(styles);
  const classes = cx('wrapper', { [className]: className });
  const handleError = () => {
    setFallback(customFallback);
  };
  return <img src={fallback || src} alt={alt} {...props} ref={ref} onError={handleError} className={classes} />;
});

export default Image;
