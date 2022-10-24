import React from 'react';



type PictureProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
  type: string;
}

function Picture({containerClassName, type, ...imgProps}: PictureProps) {
    return <picture className={containerClassName}>
      <source srcSet={imgProps.src} {...{type}} />
      <img {...imgProps} />
    </picture>;
}

export default Picture