import React, { PureComponent } from 'react'
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export class AAPLTradingViewWidget extends PureComponent {
    render() {
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
        )
    }
}

export default AAPLTradingViewWidget
