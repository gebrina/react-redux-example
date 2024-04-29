import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import {useSelector,useDispatch} from 'react-redux'
import { decrementAction, incrementAction } from "./redux/actions";
import { Input } from "./components/Input";
import { useState } from "react";

export const App = () => {
   const counter = useSelector((state:{counter:number})=>state.counter);
   const dispatch = useDispatch();
   const [incrementBy,setIncrementBy]= useState();

  const handleIncrement = ()=>{
    dispatch(incrementAction(incrementBy))
  }
  const handleDecrement = ()=>{
    dispatch(decrementAction(incrementBy))
  }
   const handleChange = (value:string)=>{
     if(isNaN(value)) return;
     setIncrementBy(Number(value));
   }

  return (
    <div>
      <h1>React Redux Example</h1>
       <Input label="Increment by?" value={incrementBy?.toString()} onChange={handleChange} />
      <Counter counter={counter} />
      <Button label="Increment" onClick={handleIncrement}/>
      <Button label="Decrement" onClick={handleDecrement} />
    </div>
  );
};
