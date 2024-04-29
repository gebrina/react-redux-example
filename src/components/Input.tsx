import {ChangeEvent, FC,useId } from 'react';

type InputProps ={
    label:string,
    onChange:(value:string)=>void,
    value:string,
    id?:string
}

export const Input:FC<InputProps> =({id,label,value,onChange})=>{
    const inputId = useId();

    const handleChange = (inputEvent:ChangeEvent<HTMLInputElement>)=>{
     const {target:{value}} = inputEvent;
     onChange(value);
    }

    return <div className='input-wrapper'>
          <label htmlFor={id||inputId}>{label}</label>
          <input id={id||inputId} value={value} onChange={handleChange} />
    </div>
}