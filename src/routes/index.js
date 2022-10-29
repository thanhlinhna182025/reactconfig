import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routesConfig';

//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import PageNotFound from '~/pages/PageNotFound';

//Public route
const publicRoutes = [
  {
    path: routesConfig.notfound,
    component: PageNotFound,
    layout: null,
  },
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];
//Private route
const privateRoutes = [];

export { publicRoutes, privateRoutes };
