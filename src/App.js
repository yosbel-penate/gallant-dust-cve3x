import React from "react";
import "./styles.css";
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
  );
}
