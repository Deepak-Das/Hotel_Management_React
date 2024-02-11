import React from "react";

import notFoundImg from "./../assets/images/not_found.jpg";

const NotFoundPage = () => {
  return (
    <div className=" tw-grid tw-h-screen tw-w-full tw-place-content-center">
      <img src={notFoundImg} className="tw-w-96" />
    </div>
  );
};

export default NotFoundPage;
