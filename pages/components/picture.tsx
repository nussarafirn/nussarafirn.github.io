import React from 'react';



type PictureProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
  type: string;
}

function Picture({containerClassName, type, alt, ...imgProps}: PictureProps) {
    return <picture className={containerClassName}>
      <source srcSet={imgProps.src} {...{type}} />
      <img {...imgProps} alt={alt ?? ''} />
    </picture>;
}

export default Picture