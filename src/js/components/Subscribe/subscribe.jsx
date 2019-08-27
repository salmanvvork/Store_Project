import React from "react";

const SignUp = props => {
  return (
    <div className="container-fluid bg-warning p-5">
      <div className="d-flex w-100 up">
        <div>
          <h3 className="text-center">
            {" "}
            <i className="fas fa-paper-plane" />{" "}
            {props.subscribe[0].subscribe[0].iconDescription}
          </h3>
        </div>
        <div>
          <form className="d-flex inp">
            <input
              type="text"
              placeholder={props.subscribe[0].subscribe[0].inputPlaceholder}
              className="form-control  
                        border-rounded-pill w-50 subs "
            />

            <button
              className="btn
                        btn-dark w-50 butn"
            >
              {props.subscribe[0].subscribe[0].btnText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
