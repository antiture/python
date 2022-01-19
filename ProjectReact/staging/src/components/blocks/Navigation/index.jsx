import React from "react"
import "./index.scss"
import CtrlTabs from "../../controls/CtrlTabs"

import Page1 from "../../screens/Page1";
import Page2 from "../../screens/Page2";
import Page3 from "../../screens/Page3";
import Page4 from "../../screens/Page4";
import Page5 from "../../screens/Page5";
import Page6 from "../../screens/Page6";


export default class Navigation extends React.Component {
    render() {
        return (
            <div className="Navigation">
                <CtrlTabs>
                    <div name="first" className="ctn-main">
                        <Page1 />
                    </div>
                    <div name="second" className="ctn-main">
                        <Page2 />
                    </div>
                    <div name="third" className="ctn-main">
                        <Page3 />
                    </div>
                    <div name="third" className="ctn-main">
                        <Page4 />
                    </div>
                    <div name="third" className="ctn-main">
                        <Page5 />
                    </div>
                    <div name="name" className="ctn-main">
                        <Page6 />
                    </div>
                </CtrlTabs>
            </div>
        )
    }
}
