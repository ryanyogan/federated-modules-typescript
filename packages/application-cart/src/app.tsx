import React from "react";

type Props = { callback?: () => void };

const SayHelloFromB: React.FC<Props> = ({ callback }) => {
  if (callback) callback();
  return <h1>Hello from Application B!</h1>;
};

export type ExportedType = typeof SayHelloFromB;

export default SayHelloFromB;
