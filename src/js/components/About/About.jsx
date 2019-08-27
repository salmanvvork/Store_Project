import React from "react";

const About = props => {
  let res = props.foot[0].footer[0].customerCare[0].customer_categories.map(
    (v, i) => {
      return <li key={i}>{v}</li>;
    }
  );
  let res2 = props.foot[0].footer[0].information[0].info_categories.map(
    (v, i) => {
      return <li key={i}>{v}</li>;
    }
  );
  let res3 = props.foot[0].footer[0].news[0].news_categories.map((v, i) => {
    return <li key={i}>{v}</li>;
  });
  let res4 = props.foot[0].footer[0].contactInfo[0].contact_categories.map(
    (v, i) => {
      return <li key={i}>{v}</li>;
    }
  );
  return (
    <div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row cus">
            {/* about */}
            <div className="col-lg-3 col-md-6 col-12 ">
              <h4 className="text-left pt-4 ml-2">
                {props.foot[0].footer[0].about[0].title}
              </h4>
              <p className="text-left text-muted font-weight-light mt-3">
                {props.foot[0].footer[0].about[0].description}
              </p>
              <div className="row text-warning p-3">
                <i className="fab fa-twitter font" />
                <i className="fab fa-facebook-f ml-2 font" />
                <i className="fab fa-linkedin ml-2 font" />
                <i className="fab fa-dribbble ml-2 font" />
              </div>
            </div>
            {/* care */}
            <div className="col-lg-2 col-md-3 col-6">
              <h6 className="mt-4">
                {props.foot[0].footer[0].customerCare[0].title}
              </h6>
              <ul className="list-unstyled text-muted font-weight-light mt-4">
                {res}
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <h6 className="mt-4">
                {props.foot[0].footer[0].information[0].title}
              </h6>
              <ul className="list-unstyled text-muted font-weight-light mt-4">
                {res2}
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <h6 className="mt-4">{props.foot[0].footer[0].news[0].title}</h6>
              <ul className="list-unstyled text-muted font-weight-light mt-4">
                {res3}
              </ul>
            </div>
            <div className="col-lg-3 col-md-9 col-6">
              <h6 className="mt-4">
                {props.foot[0].footer[0].contactInfo[0].title}
              </h6>
              <ul className="list-unstyled text-muted font-weight-light mt-4">
                {res4}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
