import { Spin } from "antd";

const Spinner = ({ text = "Please wait..." }: { text?: string }) => {
  return (
    <Spin tip={text} size="large" fullscreen>
      <div className="content" />
    </Spin>
  );
};

export default Spinner;
