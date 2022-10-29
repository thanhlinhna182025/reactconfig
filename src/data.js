import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEarthAsia,
  faQuestionCircle,
  faKeyboard,
  faUser,
  faVideoSlash,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
export const MENU_DATA = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'vi', title: 'Tiếng Việt dau' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt 0' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt 1' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt 2' },
        { type: 'language', code: 'vi', title: 'Tiếng Việt cuoi' },
        {
          type: 'language',
          code: 'en',
          title: 'English',
          children: {
            title: 'Language',
            data: [
              { type: 'language', code: 'vi', title: 'Tiếng Việt 2' },
              {
                type: 'language',
                code: 'en',
                title: 'English 2',
                children: {
                  title: 'Language',
                  data: [
                    { type: 'language', code: 'vi', title: 'Tiếng Việt 3' },
                    { type: 'language', code: 'china', title: 'Chinese 3' },
                    { type: 'language', code: 'en', title: 'English 3' },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
  { icon: <FontAwesomeIcon icon={faQuestionCircle} />, title: 'Feedback and help', to: '/feedback' },
  { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];
export const USER_MENU = [
  { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/user' },
  { icon: <FontAwesomeIcon icon={faVideoSlash} />, title: 'LIVE studio', to: '/live' },
  { icon: <FontAwesomeIcon icon={faGear} />, title: 'Setting', to: '/setting' },
  ...MENU_DATA,
  { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
];
