import React from "react";
import "./styles/index.scss";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import ProductsPage from "./containers/ProductsPage";
import AboutPage from "./containers/AboutPage";
import ArticleItem from "./containers/ArticleItem";
import ArticlesPage from "./containers/ArticlesPage";
import TestPage from "./components/TestPage";
import Counter from "../src/containers/Counter";
import UpdaodComponent from "./containers/UploadProducts";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route exact path="/articles" component={ArticlesPage} />
        <Route exact path="/articles/:id" component={ArticleItem} />
        <Route path="/articles/:id/:type" component={TestPage} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/addproduct" component={UpdaodComponent} />
      </Switch>
    </Router>
  );
};

export default App;
