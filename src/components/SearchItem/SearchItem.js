import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SearchItem.module.scss';
import Image from '../Image/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SearchItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('search-item')}>
      <div className={cx('avatar')}>
        <Image src={data.avatar} />
      </div>
      <div>
        <div className={cx('name')}>
          <h4>{data.full_name}</h4>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
        </div>
        <span className={cx('account')}>{data.nickname}</span>
      </div>
    </Link>
  );
}
SearchItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SearchItem;
