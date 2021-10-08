 import React, { Component } from "react";
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
            // TODO: Redesign the Skeleton based on the Wireframes
            // TODO: Make Changes to the design and cursor code for better interactivity.
            // Skeleton for Homepage
            <main className="row">
                {/* Cursor code */}
                <div className="cursor" style={{left: this.state.left, top: this.state.top}} />
                {/* Container for Image & Intro */}
                <div className="margin-left-4">
                {/* Code for the Blobs animation goes here : REFER TO UPNOTE for code */}
                {/* -------------------------------------- */}
                    
                    {/* Hero Image & Intro */}
                            {/* Text on the left */}
                            
                            {/* Title */}
                            <div className="text-header">Hello👋</div>
                            {/* Subtitle */}
                            <header className="text-subheader margin-top-10">It's <span className="name">DEEP</span> here!</header>

                            {/* Subtitle and additional text */}
                            <p className="text-desc margin-top-10">A friendly neighborhood geek.</p>
                            <p className="text-desc">Full Stack Developer.</p>
                        
                            {/* Explore Portfolio Button */}
                            <a href="#" className="button margin-top-10">
                                <span>Explore Portfolio</span>
                        
                                {/* Icon Arrow Right SVG */}
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

                            <div className="content-landing">
                                {/* Text on the right */}

                                
                            </div>
                </div>
            </main>    
        )
    }
}
export default HomeSkeleton;