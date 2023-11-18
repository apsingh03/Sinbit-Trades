import React from "react";

import parse from "html-react-parser";

const DescriptionAppended = ({ data }) => {
  return <>{parse(data)}</>;
};

export default DescriptionAppended;
