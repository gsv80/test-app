
import {useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
import { decrement } from './actions';
// import { loginIn } from './actions';

import Start from '../src/components/StartPage'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);

  const dispatch = useDispatch();


  return (
    <div className="App">

      <h2>Counter {counter}</h2>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {/* <button onClick={() => dispatch(loginIn())}>log_in</button> */}
      < Start />

      {isLogged  ? <h3>Valuable information</h3> : ''}

    </div>
  );
}

export default App;
