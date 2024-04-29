import { FC } from 'react';

type CounterProps = {
  counter: number;
};
export const Counter: FC<CounterProps> = ({ counter = 0 }) => {
  return (
    <p className="counter">
      {counter}
    </p>
  );
};
