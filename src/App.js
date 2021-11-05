import React from "react";
import "./styles.css";
import MyTradingViewWidget from "./MyTradingViewWidget"
import BTCTradingViewWidget from "./BTCTradingViewWidget"
import { BrowserRouter , Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/geeks/second"
            component={BTCTradingViewWidget}>
          </Route>
          <Route exact path="/geeks/first"
            component={MyTradingViewWidget}>
          </Route>
          <ul>
          <br />
          <li>
            <Link to="/geeks/first" target="_blank">
                Open AAPL Trading View
            </Link>
          </li>
          <br />
          <li>
            <Link to="/geeks/second" target="_blank">
              Open BTC Trading View
            </Link>
          </li>
        </ul>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
