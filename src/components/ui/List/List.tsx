import { Fragment } from 'react';

type ListProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  className?: string;
};

const List = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
  className,
}: ListProps<T>) => {
  return (
    <div className={className}>
      {data.map((item) => (
        <Fragment key={keyExtractor(item)}>{renderItem(item)}</Fragment>
      ))}
    </div>
  );
};

export default List;
