import { HeaderOnly } from '~/layouts';
import config from '~/configs';

//Page
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search/Search';
import Live from '~/pages/Live/Live';
import PageNotFound from '~/pages/PageNotFound/PageNotFound';

//Public route
const publicRoutes = [
  {
    path: config.routes.notfound,
    component: PageNotFound,
    layout: null,
  },
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.live,
    component: Live,
  },
];
//Private route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
