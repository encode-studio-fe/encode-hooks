/**
 * title.zh-CN: 与其它全屏操作共存
 * desc.zh-CN: 元素的全屏情况可能被其它脚本修改，不用担心，encode-hooks 可以与它们共存。
 */

import React, { useRef } from 'react';
import { useFullscreen } from 'encode-hooks';

function vanillaToggleFullscreen(element) {
  const isFullscreen = !!document.fullscreenElement;

  if (isFullscreen) {
    document.exitFullscreen();
  } else {
    element.requestFullscreen();
  }
}

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(ref);

  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <button style={{ marginRight: '8px' }} onClick={toggleFullscreen}>
          encode hooks toggleFullscreen
        </button>
        <button onClick={() => vanillaToggleFullscreen(ref.current)}>
          vanilla toggleFullscreen
        </button>
      </div>
    </div>
  );
};
