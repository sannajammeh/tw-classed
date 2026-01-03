import React from "react";

type Props = {
  on: string;
};

const ChangeLog = ({ on }: Props) => {
  return (
    <div>
      <h1>Change Log</h1>
      <p>Here is the change log for {on}</p>
    </div>
  );
};

export default ChangeLog;
