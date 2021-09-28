 import React, { Component } from "react";
 import { Container, Grid, Icon, Menu, Button, Image, Header, Label } from 'semantic-ui-react';
 import Landing from '../../assets/avatar.png';

class HomeSkeleton extends Component{
    state = {
        left: 0,
        top: 0
    }
    // Cursor Implementation
    componentDidMount(){
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX, top: e.pageY});
        });
    }

    render(){
        return(
            // Skeleton for Homepage
            <>
                {/* Container for Image & Intro */}
                <div className="margin-top-15">
                {/* Code for the Blobs animation goes here : REFER TO UPNOTE for code */}
                {/* -------------------------------------- */}
                    {/* Cursor code */}
                    <div className="cursor" style={{left: this.state.left, top: this.state.top}} />
                    {/* Hero Image & Intro */}
                    <Grid stackable columns={2} className="landing-area margin-top-65">
                        <Grid.Column>
                            {/* Image on the left */}
                            <Image src={Landing} className="landing-image" rounded />
                        </Grid.Column>
                        <Grid.Column>
                            <div className="content-landing">
                                {/* Intro Text on the right */}
                                {/* Title */}
                                <Header className="text-header margin-top-10" as="h2">Hello There👋</Header>
                                {/* Subtitle */}
                                <Header className="text-subheader margin-top-10" as="h4">It's <span className="name">DEEP</span> here!</Header>
                                {/* TODO: Add paragraph highlighting skills */}
                                <p className="text-desc margin-top-10">A friendly neighborhood geek.</p>
                                <p className="text-desc">Full Stack Developer.</p>
                                {/* Explore Portfolio Button */}
                                <a href="#" className="button margin-top-10">
                                    <span>Explore Portfolio</span>
                                    {/* <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg> */}
                                    <svg className="svg-arrow" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0)">
                                        <path d="M-5.70831 17.5H14.7084" stroke="#F0CDB8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M17.5 7.29163L27.7083 17.5L17.5 27.7083" stroke="#F0CDB8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="35" height="35" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                                {/* <Button as='div' labelPosition='right' >
                                    <Button className="explore-btn-text" content="Explore Portfolio" />
                                    <Label as="a" basic icon="arrow right" / >
                                </Button> */}
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
            </>    
        )
    }
}
export default HomeSkeleton;