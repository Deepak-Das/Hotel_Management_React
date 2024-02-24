import notFoundImg from "../assets/images/not_found.jpg";

interface Props {
  errorMsg: string | undefined;
}

const Error = ({ errorMsg }: Props) => {
  return (
    <div className="tw-flex  tw-h-full tw-w-full tw-flex-col tw-items-center tw-justify-center ">
      <img src={notFoundImg} className="tw-w-1/5" />
      <h2 className="tw-text-2xl tw-font-medium tw-text-textColor">
        Someting went wrong...
        <hr />
      </h2>
      <p>{errorMsg}</p>
    </div>
  );
};

export default Error;
