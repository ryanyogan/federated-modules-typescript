import React from "react";

type Props = { callback?: () => void };

const Cart: React.FC<Props> = ({ callback }) => {
  if (callback) callback();
  return <h1>Hello from Cart!</h1>;
};

export default Cart;
