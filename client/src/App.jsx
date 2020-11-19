import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ProductsList from "./components/ProductsList";
import ItemModal from './components/itemModel';
import {Container} from 'reactstrap';

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div classname="App">
          <AppNavbar />
          <Container>
            <ItemModal>
            </ItemModal>
          </Container>
          <ProductsList />
        </div>
      </Provider>
    );
  }
}

export default App;
