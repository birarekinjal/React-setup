import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./Main";
import Loader from "./component/Loader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  let loader = <Loader />;
  if (loading === false) {
    loader = (
      <div className="App">
        <Router>
          <Main />
        </Router>
      </div>
    );
  }
  return loader;
};

export default connect()(App);
