import React, {Component} from "react";
import { Container, Grid, GridColumn, Icon } from "semantic-ui-react";

class Nav extends Component{
    // TODO: Add Responsive Blob Cursor for links
    render(){
        return(
            // Nav Bar 
            <>
            <div className="nav-container">
                {/* Navigation Menu Items */}
                <Grid stackable columns={5}>
                    <Grid.Column width={1} />
                    <Grid.Column as='a' href="#">
                        Home
                    </Grid.Column>
                    <Grid.Column as='a' href="#">
                        Work
                    </Grid.Column>
                    <Grid.Column as='a' href="#">
                        Find Me
                    </Grid.Column>
                    <Grid.Column floated="right" width={1}>
                        {/* Icon for Theme */}
                        <Icon link name="sun" className="theme-icon" loading/>
                    </Grid.Column>
                </Grid>
                </div>
            </>
        )
    }
}

export default Nav;