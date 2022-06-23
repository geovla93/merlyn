import { FC } from 'react';
import NextImage, { ImageProps } from 'next/image';
import cn from 'classnames';

const Image: FC<ImageProps> = ({ className, objectFit, layout, ...props }) => {
  return (
    <div className={cn('relative', className)}>
      <NextImage
        {...props}
        objectFit={objectFit || 'cover'}
        layout={layout || 'fill'}
      />
    </div>
  );
};

export default Image;
