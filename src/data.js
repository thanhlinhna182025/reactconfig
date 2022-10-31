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
      title: 'Language 234',
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

export const suggestUsers = [
  {
    id: 1,
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667368800&x-signature=7bJNrToy%2Bd%2BZOWj5msDadcrH4H4%3D',
    nickname: 'theanh28entertainment',
    full_name: 'Theanh28 Entertainment',
    tick: true,
  },
  {
    id: 2,
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fac92301a36c2275c99f393061ef04ca~c5_100x100.jpeg?x-expires=1667368800&x-signature=VNmS5f8ih7VbsLo7KuJNA9H1dTU%3D',
    nickname: 'tiin.vn',
    full_name: 'Tiin.vn',
    tick: true,
  },
  {
    id: 3,
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667368800&x-signature=7bJNrToy%2Bd%2BZOWj5msDadcrH4H4%3D',
    nickname: 'theanh28entertainment',
    full_name: 'Theanh28 Entertainment',
    tick: false,
  },
  {
    id: 4,
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667368800&x-signature=7bJNrToy%2Bd%2BZOWj5msDadcrH4H4%3D',
    nickname: 'theanh28entertainment',
    full_name: 'Theanh28 Entertainment',
    tick: true,
  },
  {
    id: 5,
    avatar:
      'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1667368800&x-signature=7bJNrToy%2Bd%2BZOWj5msDadcrH4H4%3D',
    nickname: 'theanh28entertainment',
    full_name: 'Theanh28 Entertainment',
    tick: true,
  },
];
