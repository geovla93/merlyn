import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

type CardProps = PropsWithChildren<{
  className?: string;
}>;

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'mb-5 rounded-lg border border-gray-200 shadow-md',
        className,
      )}
    >
      {children}
    </div>
  );
};
export default Card;
