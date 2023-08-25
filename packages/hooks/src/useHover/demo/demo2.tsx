/**
 * title: 传入 DOM 元素
 * desc: 传入 function 并返回一个 dom 元素。
 */

import React from 'react';
import { useHover } from 'encode-hooks';

export default () => {
  const isHovering = useHover(() => document.getElementById('hover-div'), {
    onEnter: () => {
      console.log('onEnter');
    },
    onLeave: () => {
      console.log('onLeave');
    },
    onChange: (isHover) => {
      console.log('onChange', isHover);
    },
  });

  return <div id="hover-div">{isHovering ? 'hover' : 'leaveHover'}</div>;
};
