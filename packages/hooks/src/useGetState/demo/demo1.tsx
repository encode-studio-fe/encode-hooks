/**
 * title: 打开控制台查看输出
 * desc: 计数器每 3 秒打印一次值
 */

import React, { useEffect } from 'react';
import { useGetState } from 'encode-hooks';

export default () => {
  const [count, setCount, getCount] = useGetState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval count', getCount());
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <button onClick={() => setCount((count) => count + 1)}>count: {count}</button>;
};
