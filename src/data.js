import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAsia, faQuestionCircle, faKeyboard } from '@fortawesome/free-solid-svg-icons';
export const MENU_DATA = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
        { type: 'language', code: 'china', title: 'Chinese' },
        {
          type: 'language',
          code: 'en',
          title: 'English',
          children: {
            title: 'Language',
            data: [
              { type: 'language', code: 'vi', title: 'Tiếng Việt 2' },
              { type: 'language', code: 'china', title: 'Chinese 2' },
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
