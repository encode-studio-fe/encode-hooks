/**
 * title: 基础用法
 * desc: 强制组件重新渲染。
 */

import React from 'react';
import { useUpdate } from 'encode-hooks';

export default () => {
  const update = useUpdate();

  return (
    <>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </>
  );
};
