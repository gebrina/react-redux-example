import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import {useSelector,useDispatch} from 'react-redux'
import { decrementAction, incrementAction } from "./redux/actions";

export const App = () => {
   const counter = useSelector((state:{counter:number})=>state.counter);
   const dispatch = useDispatch();

  const handleIncrement = ()=>{
    dispatch(incrementAction(1000))
  }
  const handleDecrement = ()=>{
    dispatch(decrementAction(5))
  }

  return (
    <div>
      <h1>React Redux Example</h1>
      <Counter counter={counter} />
      <Button label="Increment" onClick={handleIncrement}/>
      <Button label="Decrement" onClick={handleDecrement} />
    </div>
  );
};
