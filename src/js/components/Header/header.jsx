import React from "react";
const Header = props => {
  let res = props.header[0].header.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <header>
          <div className="image">
            <div className="headerDescription">
              <h4>{val.name}</h4>
              <div>
                <span>{val.prevPage}</span>
                <span>{val.presentPage}</span>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};
export default Header;
