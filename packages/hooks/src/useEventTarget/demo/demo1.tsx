/**
 * title: 基础用法
 * desc: 受控的 input，支持 reset。
 */

import React from 'react';
import { useEventTarget } from 'encode-hooks';

export default () => {
  const [value, { reset, onChange }] = useEventTarget({ initialValue: 'this is initial value' });

  return (
    <div>
      <input value={value} onChange={onChange} style={{ width: 200, marginRight: 20 }} />
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  );
};
