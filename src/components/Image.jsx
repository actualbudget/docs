import React from 'react';
import IdealImage from '@theme/IdealImage';

// https://github.com/endiliey/react-ideal-image/blob/de4e8f0388ac3645d3f32355c79c3b6a7cc61ff3/src/components/theme.js
// (removed `img` styles to prevent image from being enlarged)
const theme = {
  placeholder: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  img: {
    // width: '100%',
    // height: 'auto',
    // maxWidth: '100%',
  },
  icon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  noscript: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}

export default function Image({ img, alt, ...props }) {
  if (!img.default) {
    let { src, ...rest } = img
    if (src.src.includes('@2x')) {
      return <IdealImage img={{
        src: {
          ...src,
          width: src.width / 2,
          height: src.height / 2
        },
        ...rest
      }} theme={theme} />
    }
  }
  return <IdealImage img={img} theme={theme} />
}
