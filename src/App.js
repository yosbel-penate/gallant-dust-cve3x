import React from "react";
import "./styles.css";
<<<<<<< HEAD
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
=======
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function App() {
  return (
    <TradingViewWidget
      symbol={"AAPL"}
      theme={Themes.DARK}
      interval="D"
      locale="en"
      timezone="America/New York"
      hideSideToolbar={true}
      details
      news={["headlines"]}
    />
>>>>>>> c249c8b5f462dd1029902a06a5c31a0728e46dba
  );
}
