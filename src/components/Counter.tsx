import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { increment, decrement, reset } from '../store/slices/counterSlice';

export default function CounterPage() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}