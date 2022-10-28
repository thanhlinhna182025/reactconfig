import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Header from './Header';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

let cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          item={item}
          onClick={() => {
            if (isParent) {
              setHistory((pre) => [...pre, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 300]}
      trigger="click"
      zIndex="999"
      // visible
      interactive
      placement="bottom-end"
      offset={[20, 10]}
      onHide={() => {
        setHistory((pre) => pre.slice(0, 1));
      }}
      render={(attrs) => (
        <PopperWrapper className="custom-popper-menu-list">
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            {history.length > 1 && (
              <Header
                title="Languaes"
                onBack={() => {
                  setHistory((pre) => pre.slice(0, pre.length - 1));
                }}
              />
            )}
            {renderItems()}
          </div>
        </PopperWrapper>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
