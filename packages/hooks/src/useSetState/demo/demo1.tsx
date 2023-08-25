/**
 * title: 基础用法
 * desc: 自动合并对象。
 */

import React from 'react';
import { useSetState } from 'encode-hooks';

interface State {
  hello: string;
  [key: string]: any;
}

export default () => {
  const [state, setState] = useSetState<State>({
    hello: '',
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({ hello: 'world' })}>
          set hello
        </button>
        <button type="button" onClick={() => setState({ foo: 'bar' })} style={{ margin: '0 8px' }}>
          set foo
        </button>
      </p>
    </div>
  );
};
