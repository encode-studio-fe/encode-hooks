/**
 *
 * title.zh-CN: 监听 keydown 事件
 * desc.zh-CN: 按下键盘查看效果。
 */

import React, { useState } from 'react';
import { useEventListener } from 'encode-hooks';

export default () => {
  const [value, setValue] = useState('');

  useEventListener('keydown', (ev) => {
    setValue(ev.code);
  });

  return <p>Your press key is {value}</p>;
};
