import React, { Component, useState } from "react";

class Skel extends Component{
    state = {
        left: 0,
        top: 0,
    }
    // Cursor Implementation
    componentDidMount(){
        document.addEventListener('mousemove', (e) => {
            this.setState({left: e.pageX, top: e.pageY});
        });
    }

    render(){
        return(
            // Frame
            <div className="frame" id="home">
                {/* Cursor code */}
                <div className="cursor" style={{left: this.state.left, top: this.state.top}} />
                {/* Background elements */}

{/* TODO: Create Animations for the Background SVGs for better visuals */}
{/* TODO: Refine and adjust the line2 */}
                <div className="back-design">
                    <i className="back-svg line-1">
                        <svg width="15" height="240" viewBox="0 0 15 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="7.5" y1="7.5" x2="7.50001" y2="232.5" stroke="black" stroke-opacity="0.3" stroke-width="15" stroke-linecap="round"/>
                        </svg>
                    </i>
                    <i className="back-svg circle">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="black" fill-opacity="0.3"/>
                        </svg>
                    </i>
                    <i className="back-svg line-2">
                        <svg width="15" height="240" viewBox="0 0 15 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="7.5" y1="7.5" x2="7.50001" y2="232.5" stroke="black" stroke-opacity="0.3" stroke-width="15" stroke-linecap="round"/>
                        </svg>
                    </i>
                    {/* Temporarily not needed */}
                    {/* <span className="back-svg scroll-left">
                        <p className="scroll-text">Scroll Down</p>
                        <i className="arrow-down">
                            <svg width="16" height="67" viewBox="0 0 16 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.2929 66.7071C7.68342 67.0976 8.31659 67.0976 8.70711 66.7071L15.0711 60.3431C15.4616 59.9526 15.4616 59.3195 15.0711 58.9289C14.6805 58.5384 14.0474 58.5384 13.6569 58.9289L8 64.5858L2.34315 58.9289C1.95262 58.5384 1.31946 58.5384 0.928935 58.9289C0.53841 59.3195 0.53841 59.9526 0.928935 60.3431L7.2929 66.7071ZM7 1L7 66L9 66L9 1L7 1Z" fill="#D1D2F9" fill-opacity="0.5"/>
                            </svg>
                        </i>
                    </span> */}
                    <span className="back-svg scroll-right">
                        <p className="scroll-text">scroll down</p>
                        <i className="arrow-down">
                            <svg width="16" height="67" viewBox="0 0 16 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.2929 66.7071C7.68342 67.0976 8.31659 67.0976 8.70711 66.7071L15.0711 60.3431C15.4616 59.9526 15.4616 59.3195 15.0711 58.9289C14.6805 58.5384 14.0474 58.5384 13.6569 58.9289L8 64.5858L2.34315 58.9289C1.95262 58.5384 1.31946 58.5384 0.928935 58.9289C0.53841 59.3195 0.53841 59.9526 0.928935 60.3431L7.2929 66.7071ZM7 1L7 66L9 66L9 1L7 1Z" fill="#D1D2F9" fill-opacity="0.5"/>
                            </svg>
                        </i>
                    </span>
                </div>

                {/* Content */}
                <div className="content">
                    <h1 className="greet">Howdy 👋</h1>
                    <h3 className="name">It's <span className="span-name"><p className="p-name">Deep</p></span> here!</h3>
                    <p className="details">A friendly neighborhood geek. <br /> [& part-time weeb]</p>

{/* TODO: Add Hover Effects for the social handles */}
                    {/* Socials */}
                    <div className="socials">
                        <i className="github">
                            <a href="https://github.com/Deep3543" target="_blank">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.6666 36.6667V30.2167C26.7292 29.4219 26.6218 28.623 26.3517 27.873C26.0815 27.123 25.6549 26.439 25.1 25.8667C30.3333 25.2833 35.8333 23.3 35.8333 14.2C35.8329 11.873 34.9378 9.63533 33.3333 7.95C34.0931 5.91418 34.0394 3.66391 33.1833 1.66666C33.1833 1.66666 31.2166 1.08333 26.6666 4.13333C22.8467 3.09803 18.82 3.09803 15 4.13333C10.45 1.08333 8.48331 1.66666 8.48331 1.66666C7.62727 3.66391 7.57355 5.91418 8.33331 7.95C6.71686 9.64783 5.82085 11.9058 5.83331 14.25C5.83331 23.2833 11.3333 25.2667 16.5666 25.9167C16.0183 26.4833 15.5954 27.159 15.3255 27.8999C15.0556 28.6407 14.9447 29.4301 15 30.2167V36.6667M15 31.6667C6.66665 34.1667 6.66665 27.5 3.33331 26.6667L15 31.6667Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </i>
                        <i className="linkedin">
                            <a href="https://www.linkedin.com/in/deeppatel3543/" target="_blank">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.6667 13.3333C29.3189 13.3333 31.8624 14.3869 33.7378 16.2623C35.6131 18.1376 36.6667 20.6812 36.6667 23.3333V35H30V23.3333C30 22.4493 29.6488 21.6014 29.0237 20.9763C28.3986 20.3512 27.5507 20 26.6667 20C25.7826 20 24.9348 20.3512 24.3097 20.9763C23.6845 21.6014 23.3334 22.4493 23.3334 23.3333V35H16.6667V23.3333C16.6667 20.6812 17.7203 18.1376 19.5956 16.2623C21.471 14.3869 24.0145 13.3333 26.6667 13.3333V13.3333Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M9.99998 15H3.33331V35H9.99998V15Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.66665 10C8.5076 10 9.99998 8.50763 9.99998 6.66668C9.99998 4.82573 8.5076 3.33334 6.66665 3.33334C4.8257 3.33334 3.33331 4.82573 3.33331 6.66668C3.33331 8.50763 4.8257 10 6.66665 10Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </i>
                        <i className="email">
                            <a href="mailto:deeppatel3543@gmail.com" target="_blank">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 34V7.00003C1 5.89546 1.89543 5.00003 3 5.00003H37C38.1046 5.00003 39 5.89546 39 7.00003V34C39 35.1046 38.1046 36 37 36H3C1.89543 36 1 35.1046 1 34Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M5 35V8.00003L19.7619 16.7568L35 8.00003V35" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skel;