import {FC} from 'react';

type ButtonProps = {
  label:string,
  onClick:()=>void
}

export const Button:FC<ButtonProps> =({label,onClick})=>{

  return <button  className="button" onClick={onClick}>{label}</button>
}