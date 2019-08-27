import React from "react";

const Footer = props => {
  return (
    <div className="container-fliud p-3 bg-light text-center">
      <p>{props.footer[0].footer[0].copyright[0].copyright_description}</p>
    </div>
  );
};
export default Footer;
