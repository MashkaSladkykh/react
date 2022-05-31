import React, {useState} from 'react';

import SquareComponent from "../component";

const Square = () => {
 
  const [num, setNum] = useState(0)

  const Plus = () => {
    setNum(num + 1)
  }

  const Minus = () => {
    setNum(num - 1)
  }
 
  return (
    <SquareComponent
      num={num}
      onPlus={Plus}
      onMinus={Minus}
    />
  )
}

export default Square;