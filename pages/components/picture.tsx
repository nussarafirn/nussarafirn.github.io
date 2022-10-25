import React from 'react';

type PictureProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
}

function Picture({containerClassName, alt, ...imgProps}: PictureProps) {
    return <picture className={containerClassName}>
      <source srcSet={imgProps.src} />
      <img {...imgProps} alt={alt ?? ''} />
    </picture>;
}

export default Picture