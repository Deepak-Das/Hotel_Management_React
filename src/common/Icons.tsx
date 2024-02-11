import React from "react";
import type { IconType } from "react-icons";

import * as mdIcon from "react-icons/md";

const Icons = ({ name }: { name: keyof IconType }) => {
  const reactIcon: IconType = mdIcon[name];
  // if (name.startsWith("fa")) {
  //   reactIcon = faIcon[name];
  // } else if (name.startsWith("Fa")) {
  //   reactIcon = mdIcon[name];
  // } else if (name.startsWith("Io")) {
  //   reactIcon = ioIcon[name];
  // }
  return React.createElement(reactIcon);
};

export default Icons;
