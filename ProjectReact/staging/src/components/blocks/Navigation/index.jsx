import React from "react"
import "./index.scss"
import TabsControl from "../../outils/TabsControl"

export default class Navigation extends React.Component{
    render(  ){
        return(
            <div className="Navigation">
                <TabsControl>
                    <div name = "first">
                        第一帧
                    </div>
                    <div name = "second">
                        第二帧
                    </div>
                    <div name = "third">
                        第三帧
                    </div>
                    <div name = "third">
                        第三帧
                    </div>
                    <div name = "third">
                        第三帧
                    </div>
                    <div name = "third">
                        第三帧
                    </div>
                </TabsControl>
            </div>
        )
    }
}
 