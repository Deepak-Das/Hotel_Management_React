import { Spin } from "antd";
import React from "react";

const Spinner = ({ text }: { text: string }) => {
  return (
    <Spin tip={text} size="large">
      <div className="content" />
    </Spin>
  );
};

export default Spinner;
