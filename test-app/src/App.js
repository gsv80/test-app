
import {useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
import { Sign_in } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <h2>Counter {counter}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(Sign_in())}>log_in</button>

      {isLogged  ? <h3>Valuable information</h3> : ''}
    </div>
  );
}

export default App;
