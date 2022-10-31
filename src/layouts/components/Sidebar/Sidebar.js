import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/configs';
import {
  HomeIcon,
  HomeFullFillIcon,
  UsersIcon,
  UsersFullFillIcon,
  LiveIcon,
  LiveFullFillIcon,
} from '~/components/Icons';
import SuggestedAccounts from './SuggestedAccounts';
import { suggestUsers } from '~/data';

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} activeIcon={<HomeFullFillIcon />} />
        <MenuItem
          to={config.routes.following}
          title="Following"
          icon={<UsersIcon />}
          activeIcon={<UsersFullFillIcon />}
        />
        <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveFullFillIcon />} />
      </Menu>
      <SuggestedAccounts title="Suggested accounts" data={suggestUsers} />
      <SuggestedAccounts title="Following accounts" data={suggestUsers} />
    </aside>
  );
}

export default Sidebar;
