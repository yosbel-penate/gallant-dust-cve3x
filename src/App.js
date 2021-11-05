import React from "react";
import "./styles.css";
import AAPLTradingViewWidget from "./AAPLTradingViewWidget"
import BTCTradingViewWidget from "./BTCTradingViewWidget"
import { BrowserRouter , Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/geeks/second"
                component={BTCTradingViewWidget}>
              </Route>
              <Route exact path="/geeks/first"
                component={AAPLTradingViewWidget}>
              </Route>
              <ul>
              <br />
              <li>
                <Link to="/geeks/first" target="_blank">
                    <button type="button">
                      Open AAPL Trading View
                    </button>
                </Link>
              </li>
              <br />
              <li>
                <Link to="/geeks/second" target="_blank">
                  <button type="button">
                    Open BTC Trading View
                  </button>
                </Link>
              </li>
            </ul>
            </Switch>
          </BrowserRouter>
        </div>
  );
}
