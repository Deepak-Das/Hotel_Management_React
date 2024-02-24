import "../styles/addBranch.scss";

const AddBranchPage = () => {
  return (
    <div className="container">
      <h4>Add Branch</h4>

      <form action="" className="form_card">
        <label htmlFor="form_box">
          <span className="form_box-label">Branch Code</span>
          <input type="text" className="form_box-input" />
        </label>
        <label htmlFor="form_box">
          <span className="form_box-label">Branch Name</span>
          <input type="text" className="form_box-input" />
        </label>
        <label htmlFor="form_box">
          <span className="form_box-label">Contact No.</span>
          <input type="tel" className="form_box-input" />
        </label>
        <label htmlFor="form_box">
          <span className="form_box-label">Aletnative No.</span>
          <input type="tel" className="form_box-input" />
        </label>
        <label htmlFor="form_box">
          <span className="form_box-label">Email Id</span>
          <input type="email" className="form_box-input" />
        </label>
      </form>
    </div>
  );
};

export default AddBranchPage;
