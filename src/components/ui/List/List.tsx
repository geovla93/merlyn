/* eslint-disable no-unused-vars */
import {
  Component,
  ComponentType,
  createElement,
  FC,
  Fragment,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react';

type ListProps<T> = {
  data: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
  className?: string;
  as: string | ComponentType;
};

type WrapperProps = HTMLAttributes<any> & {
  as: string | ComponentType;
};

const List = <T extends unknown>({
  data,
  renderItem,
  keyExtractor,
  className,
  as = 'div',
}: ListProps<T>) => {
  // const wrapperProps: WrapperProps = {
  //   className,
  //   children: data.map((item) => (
  //     <Fragment key={keyExtractor(item)}>{renderItem(item)}</Fragment>
  //   )),
  // };

  return (
    <Wrapper as={as} className={className}>
      {data.map((item) => (
        <Fragment key={keyExtractor(item)}>{renderItem(item)}</Fragment>
      ))}
    </Wrapper>
  );
};

const Wrapper: FC<WrapperProps> = ({ as, ...props }) =>
  createElement<Omit<WrapperProps, 'as'>>(as, props);

export default List;
