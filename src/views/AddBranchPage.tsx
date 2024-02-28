import SelectField from "../components/SelectField";
import TextArea from "../components/TextArea";
import TextField from "../components/TextField";
import UplodImgButton from "../components/UplodImgButton";
import "../styles/addBranch.scss";
import CustomDatePicker from "../components/CustomDatePicker";
import { SubmitHandler } from "react-hook-form";
import { Content } from "../model/branch.model";
import { useSaveBranch } from "../hook/useSaveBranch";
import Spinner from "../common/Spinner";
import { InfoMsg } from "../common/InfoMsg";

const AddBranchPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    isPending,
    isError,
    isSuccess,
    showSuccessMessage,
    setShowSuccessMessage,
    mutate,
    data,
  } = useSaveBranch<Content>();

  const onSubmit: SubmitHandler<Content> = async (data) => {
    const save = await mutate(data);
    if (isSuccess) {
      reset();
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 10000);
    }
  };

  if (isPending) {
    return <Spinner text="" />;
  }

  return (
    <div className="container tw-w-full tw-bg-white tw-p-4">
      {showSuccessMessage && (
        <div>
          <InfoMsg alertTitle="Success Submited!" alertInfo="👍" />;
        </div>
      )}
      <h4>Add Branch</h4>
      <div className="tw-mb-4 tw-flex tw-w-full tw-gap-2 tw-border-b-2 tw-pb-3 ">
        <UplodImgButton />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="tw-flex  tw-flex-wrap">
        <TextField
          register={register}
          errors={errors}
          fieldName={"branchCode"}
          title="Brach Code"
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"branchName"}
          title="Branch Name"
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"contactNo"}
          title="Contact No."
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"alternateMobile1"}
          title="Aletnative(1) No."
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"alternateMobile2"}
          title="Aletnative(2) No."
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"landlineNo"}
          title="Landline No."
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"emailId"}
          title="Email Id"
        />
        <TextField
          register={register}
          errors={errors}
          fieldName={"supportEmail"}
          title="Support email Id"
        />

        <CustomDatePicker
          fieldName="createDate"
          errors={errors}
          register={register}
          title="created Date"
        />

        <SelectField />
        <div className="tw-w-full"></div>

        <TextArea
          register={register}
          errors={errors}
          fieldName={"branchAddress"}
          title="Address"
        />
        <TextArea
          register={register}
          errors={errors}
          fieldName={"description"}
          title="Description"
        />

        <div className="tw-w-full"></div>

        {/* <div className="tw-w-full"></div> */}

        <div className="tw-flex tw-w-full tw-justify-center">
          <button
            disabled={isPending}
            type="submit"
            className="tw-rounded-md tw-bg-primaryColor tw-p-1 tw-text-sm tw-font-normal tw-text-white tw-transition-all tw-duration-75 tw-ease-out hover:tw-scale-105"
          >
            {isPending ? "Loding" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBranchPage;
