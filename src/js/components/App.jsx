import React, { Component } from "react";
import Nav from "./Nav/nav";
import data from "./data";
import Header from "./Header/header";
import Product from "./Product/product";
import ProductData from "./product";
import Subscribe from "./Subscribe/subscribe";
import About from "./About/About";
import Footer from "./Footer/Footer";
class App extends Component {
  state = {
    data: data,
    product: ProductData
  };
  render() {
    return (
      <React.Fragment>
        <Nav nav={this.state.data} />
        <Header header={this.state.data} />
        <Product productData={this.state.product} product={this.state.data} />
        <Subscribe subscribe={this.state.data} />
        <About foot={this.state.data} />
        <Footer footer={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
