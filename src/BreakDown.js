import React, { useReducer } from 'react';
import { Table } from 'react-bootstrap';
import { useSharedState } from './SharedStateExample';
import { dispatch } from 'd3';

const initialState = {
  isLoading: false,
  error: undefined,
  results: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'load')
    return { ...state, isLoading: true, results: [], error: undefined };
  if (action.type === 'load_complete')
    return { ...state, isLoading: false, results: action.results };
  if (action.type === 'load_error')
    return { ...state, isLoading: false, error: action.error };
};

async function load() {
  dispatch({ type: 'load' });
  try {
    const results = await myApi.get();
    dispatch({ type: 'load_complete', results });
  } catch (error) {
    dispatch({ type: 'load_error', error });
  }
}

const Breakdown = (props) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      if (action.type === 'uppercase')
        return {
          ...state,
          eventCount: state.eventCount + 1,
          name: state.name.toUpperCase(),
        };

      if (action.type === 'lowercase')
        return {
          ...state,
          eventCount: state.eventCount + 1,
          name: state.name.toLowerCase(),
        };

      return state;
    },
    {
      name: 'test',
      eventCount: 0,
    }
  );
  const { value } = useSharedState();
  return (
    <div>
      <h1>
        Value: {state.name} ({state.eventCount})
      </h1>
      <button onClick={() => dispatch({ type: 'uppercase' })}>Shout!</button>
      <button onClick={() => dispatch({ type: 'lowercase' })}>Whisper!</button>
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Principle</th>
            <th>Interest</th>
            <th>Payment</th>
            <th>Remaining Balance</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.period}>
              <td>{item.period}</td>
              <td>{item.principle.toFixed(2)}</td>
              <td>{item.interest.toFixed(2)}</td>
              <td>{item.payment.toFixed(2)}</td>
              <td>{item.balance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Breakdown;
