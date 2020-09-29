import React from 'react';
import { useSharedState } from './SharedStateExample';

export const ExampleUsage = () => {
  const { value, increment } = useSharedState();
  return (
    <>
      <h1>Value: {value}</h1>
      <button onClick={increment}>+1</button>
    </>
  );
};
