/**
 * title.zh-CN: 使用回调更新
 * desc.zh-CN: 通过回调进行更新，可以获取上一次的状态，并且也会自动合并返回的对象。
 */

import React from 'react';
import { useSetState } from 'encode-hooks';

interface State {
  hello: string;
  count: number;
}

export default () => {
  const [state, setState] = useSetState<State>({
    hello: 'world',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState((prev) => ({ count: prev.count + 1 }))}>
          count + 1
        </button>
      </p>
    </div>
  );
};
