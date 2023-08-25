/**
 * title: 基础用法
 * desc: 请点击按钮或按钮外查看效果。
 */

import React, { useState, useRef } from 'react';
import { useClickAway } from 'encode-hooks';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref);

  return (
    <div>
      <button ref={ref} type="button">
        box
      </button>
      <p>counter: {counter}</p>
    </div>
  );
};
