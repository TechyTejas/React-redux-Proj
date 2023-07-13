import classes from './Counter.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const Counter = () => {
   //when we use seSelector react redux will automatically sent the subscripton of store to this component
  const counter = useSelector(state => state.counter);
  // the function e pass in useSelector that will executed by react redux which basically tell which data we wanna extract from store
  // we pass function in it a function will recieve the state manage by redux AND return the part of the state which we wanna extract
  const dispatch = useDispatch();

  const IncrementHandler = () => {
    dispatch({type : "increment"})
  }

  const DecrementHandler = () => {
    dispatch({type : "decrement"})
  }
 
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
