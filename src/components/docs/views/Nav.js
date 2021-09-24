import React, {Component} from "react";
import { Container, Grid, Icon } from "semantic-ui-react";

class Nav extends Component{
    render(){
        return(
            // Nav Bar 
            <>
                <div>
                    <div className="margin-top-4 nav">
                        <div className="nav-bar-container">
                            {/* Icon for Theme */}
                            <Icon name="sun" className="theme-icon"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Nav;