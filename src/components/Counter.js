import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../Store';

const Counter = () => {
    const dispatch=useDispatch()

  //when we use seSelector react redux will automatically sent the subscripton of store to this component
    const counter=useSelector(state=>state.counter.counter);

    const show=useSelector(state=>state.counter.showCounter);
  // the function we pass in useSelector that will executed by react redux which basically tell which data we wanna extract from store
  // we pass function in it a function will recieve the state manage by redux AND return the part of the state which we wanna extract


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler=()=>{
        dispatch(counterActions.increment())
  }

  const increaseHandler=()=>{
    dispatch(counterActions.increase(10)) 
  }

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> {counter} </div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;