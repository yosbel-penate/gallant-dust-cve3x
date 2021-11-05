import React, { PureComponent } from 'react'
import TradingViewWidget, { Themes } from "react-tradingview-widget";

export class BTCTradingViewWidget extends PureComponent {
    render() {
        return (
            <TradingViewWidget
                symbol={"BTC"}
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

export default BTCTradingViewWidget
