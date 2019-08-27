import React from "react";
const Section = props => {
  let res = props.productData[0].sectionCategories[0].categories.map(
    (val, ind) => {
      return (
        <React.Fragment key={ind}>
          <div className="product_item">
            <div className="product-img">
              {val.sale ? (
                <span
                  className="sale badge badge-danger ml-1 mt-1"
                  style={{ zIndex: "100" }}
                >
                  Sale
                </span>
              ) : (
                ""
              )}
              {val.new ? (
                <span
                  className="sale badge badge-warning ml-1 mt-1 text-white"
                  style={{ zIndex: "100" }}
                >
                  New
                </span>
              ) : (
                ""
              )}
              <img src={val.img} alt="" height="100%" width="100%" />
              <div className="hover">
                <a href="#">
                  <i className={val.cart_icon} />
                </a>
                <a href="#">
                  <i className={val.eye_icon} />
                </a>
                <a href="#">
                  <i className={val.heart_icon} />
                </a>
                <a href="#">
                  <i className={val.signal_icon} />
                </a>
              </div>
            </div>
            <div className="product-details">
              <p>{val.name}</p>
              {val.sale ? (
                <React.Fragment>
                  <span>
                    <span style={{ zIndex: "100" }}>{val.price}</span>
                    <s className="ml-2">$300.00</s>
                  </span>
                </React.Fragment>
              ) : (
                <p>$300.00</p>
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  );
  let collapse = props.product[0].asideCategories[0].titles.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <div className="panel panel-default ml-4 mt-2">
          <div className="panel-heading">
            <a
              data-toggle="collapse"
              className="text-dark"
              href={`#collapse${ind}`}
            >
              {val}
            </a>
          </div>
          <div id={`collapse${ind}`} className="panel-collapse collapse">
            <ul>
              <li>{props.product[0].asideCategories[1].category[0]}</li>
              <li>{props.product[0].asideCategories[1].category[1]}</li>
              <li>{props.product[0].asideCategories[1].category[2]}</li>
              <li>{props.product[0].asideCategories[1].category[3]}</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  });
  let price = props.product[0].asidePrice.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <h5 className="ml-4 mt-3">{val.title}</h5>
        <form action="#">
          <p className="ml-4">{val.from}:</p>
          <select
            name="from"
            className="form-control w-75 m-auto m-md-4 select-width"
          >
            <option>{val.opt_1[0]}</option>
            <option>{val.opt_1[1]}</option>
            <option>{val.opt_1[2]}</option>
            <option>{val.opt_1[3]}</option>
            <option>{val.opt_1[4]}</option>
          </select>
          <p className="ml-4 mt-3">{val.to}:</p>
          <select
            name="to"
            className="form-control w-75 m-auto m-md-4 select-width"
          >
            <option>{val.opt_2[0]}</option>
            <option>{val.opt_2[1]}</option>
            <option>{val.opt_2[2]}</option>
            <option>{val.opt_2[3]}</option>
            <option>{val.opt_2[4]}</option>
          </select>
        </form>
      </React.Fragment>
    );
  });
  let colors = props.product[0].asideColors.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <h5>{val.title}</h5>
        <div className="color">
          <div
            className="color-box"
            style={{ backgroundColor: `#${val.colorOne}` }}
          />
          <div
            className="color-box"
            style={{ backgroundColor: `#${val.colorTwo}` }}
          />
          <div
            className="color-box"
            style={{ backgroundColor: `#${val.colorThree}` }}
          />
          <div
            className="color-box"
            style={{ backgroundColor: `#${val.colorFour}` }}
          />
          <div
            className="color-box"
            style={{ backgroundColor: `#${val.colorFive}` }}
          />
        </div>
      </React.Fragment>
    );
  });
  let sizes = props.product[0].asideSize.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <h5>{val.title}</h5>
        <div className="size">
          <a href="#">
            <div className="box-1">{val.xs}</div>
          </a>
          <a href="#">
            <div className="box-1">{val.s}</div>
          </a>
          <a href="#">
            <div className="box-1">{val.m}</div>
          </a>
          <a href="#">
            <div className="box-1">{val.l}</div>
          </a>
          <a href="#">
            <div className="box-1">{val.xl}</div>
          </a>
          <a href="#">
            <div className="box-1">{val.xxl}</div>
          </a>
        </div>
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      <article>
        <div className="products">
          <aside>
            <div className="asideBar">
              <div className="category">
                <h5 className="ml-4 mt-4">Categories</h5>
                <div className="mt-4">
                  <div className="panel-group">{collapse}</div>
                </div>
              </div>
              <div className="price mt-3">{price}</div>
              <div className="colors mt-3">{colors}</div>
              <div className="sizes mt-3">{sizes}</div>
            </div>
          </aside>
          <section>
            <div className="product_items">{res}</div>
          </section>
        </div>
      </article>
    </React.Fragment>
  );
};
export default Section;
