import React, { Component } from "react";

class Find extends Component{
    render(){
        return(
            // Frame for Find Me Page
            <div className="find-container" id="find">
                {/* Content */}
                <div className="find-content">
                    {/* Header */}
                    <h3 className="head find-header">Where am I?</h3>
                    {/* Description */}
                    <p className="details find-details">I am based in Gold Coast - Queensland.</p>
                    <div className="find-ques-container">
                        {/* Questions for Find Me */}
{/* TODO: Add icons to the answers */}
                        <ul className="find-ques">
                            <li className="item-left ques1">I Wanna work with/hire you?</li>
                            <li className="item-right ans1">deeppatel3543@gmail.com</li>
                            <li className="item-left ques2">Are You educated enough?</li>
                            <li className="item-right ans2">deeppatel3543</li>
                            <li className="item-left ques3">What kind of project you do?</li>
                            <li className="item-right ans3">Deep3543</li>
                            <li className="item-left ques4">I just wanna say Hi to you!</li>
                            <li className="item-right ans4">@deep_3543</li>
                            <li className="item-left ques5">Do you have a side hobby?</li>
                            <li className="item-right ans5">@deepclicks.ig</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Find;