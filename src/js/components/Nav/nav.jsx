import React from "react";
const Nav = props => {
  let navItems = props.nav[0].nav[0].navItems.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {val}
          </a>
        </li>
      </React.Fragment>
    );
  });
  let res = props.nav.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand ml-5" href="#">
            {val.nav[0].navLogo}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
              {navItems}
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className={val.nav[0].icon_cart} /> {val.nav[0].cart}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};
export default Nav;
