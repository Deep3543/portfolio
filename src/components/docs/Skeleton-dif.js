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
            <div className="frame">
                {/* Cursor code */}
                <div className="cursor" style={{left: this.state.left, top: this.state.top}} />
                {/* Background elements */}
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
                    <span className="back-svg scroll">
                        <p className="scroll-text">Scroll Down</p>
                        <i className="arrow-down">
                            <svg width="16" height="67" viewBox="0 0 16 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.2929 66.7071C7.68342 67.0976 8.31659 67.0976 8.70711 66.7071L15.0711 60.3431C15.4616 59.9526 15.4616 59.3195 15.0711 58.9289C14.6805 58.5384 14.0474 58.5384 13.6569 58.9289L8 64.5858L2.34315 58.9289C1.95262 58.5384 1.31946 58.5384 0.928935 58.9289C0.53841 59.3195 0.53841 59.9526 0.928935 60.3431L7.2929 66.7071ZM7 1L7 66L9 66L9 1L7 1Z" fill="#D1D2F9" fill-opacity="0.5"/>
                            </svg>
                        </i>
                    </span>
                </div>
                {/* Nav Pane */}
                {/* TODO: Add the highlight line below the active tab */}
                {/* TODO: Make the Text Bold for the active tab */}
                <nav className="nav-bar">
                    <ul className="nav-list">
                        <li><a href="#" name="Home">Home</a></li>
                        <li><a href="#" name="Work">Work</a></li>
                        <li><a href="#" name="Find">Find Me</a></li>
                        <li className='resume' name="Resume">
                            <a href="#">Resume
                                <i className="i-download">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.33 18.75L26.3298 23.75C26.3298 24.413 24.3784 23.5099 23.9096 23.9787C23.4407 24.4476 24.4928 26.25 23.8298 26.25H6.32979C5.66675 26.25 6.37842 24.4476 5.90958 23.9787C5.44074 23.5099 3.82979 24.413 3.82979 23.75L6.83 18.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.6966 18.9787L22.8298 22.3121C22.8298 22.7541 21.4421 22.152 21.1087 22.4645C20.7754 22.7771 21.5235 23.9787 21.052 23.9787H8.60757C8.13607 23.9787 8.64215 22.7771 8.30875 22.4645C7.97535 22.152 6.82979 22.7541 6.82979 22.3121L8.96327 18.9787" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M8.82979 13.5L15.0798 19.75L21.3298 13.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.8298 18.75V3.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </i>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Content */}
                <div className="content">
                    <h1 className="greet">Howdy 👋</h1>
                    <h3 className="name">It's <span>Deep</span> here!</h3>
                    <p className="details">A friendly neighborhood geek. <br /> [& part-time weeb]</p>
                    
                    {/* Socials */}
                    <div className="socials">
                        <i className="github">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6666 36.6667V30.2167C26.7292 29.4219 26.6218 28.623 26.3517 27.873C26.0815 27.123 25.6549 26.439 25.1 25.8667C30.3333 25.2833 35.8333 23.3 35.8333 14.2C35.8329 11.873 34.9378 9.63533 33.3333 7.95C34.0931 5.91418 34.0394 3.66391 33.1833 1.66666C33.1833 1.66666 31.2166 1.08333 26.6666 4.13333C22.8467 3.09803 18.82 3.09803 15 4.13333C10.45 1.08333 8.48331 1.66666 8.48331 1.66666C7.62727 3.66391 7.57355 5.91418 8.33331 7.95C6.71686 9.64783 5.82085 11.9058 5.83331 14.25C5.83331 23.2833 11.3333 25.2667 16.5666 25.9167C16.0183 26.4833 15.5954 27.159 15.3255 27.8999C15.0556 28.6407 14.9447 29.4301 15 30.2167V36.6667M15 31.6667C6.66665 34.1667 6.66665 27.5 3.33331 26.6667L15 31.6667Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                        <i className="linkedin">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.6667 13.3333C29.3189 13.3333 31.8624 14.3869 33.7378 16.2623C35.6131 18.1376 36.6667 20.6812 36.6667 23.3333V35H30V23.3333C30 22.4493 29.6488 21.6014 29.0237 20.9763C28.3986 20.3512 27.5507 20 26.6667 20C25.7826 20 24.9348 20.3512 24.3097 20.9763C23.6845 21.6014 23.3334 22.4493 23.3334 23.3333V35H16.6667V23.3333C16.6667 20.6812 17.7203 18.1376 19.5956 16.2623C21.471 14.3869 24.0145 13.3333 26.6667 13.3333V13.3333Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.99998 15H3.33331V35H9.99998V15Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.66665 10C8.5076 10 9.99998 8.50763 9.99998 6.66668C9.99998 4.82573 8.5076 3.33334 6.66665 3.33334C4.8257 3.33334 3.33331 4.82573 3.33331 6.66668C3.33331 8.50763 4.8257 10 6.66665 10Z" stroke="#FFD765" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </i>
                        <i className="email">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33334C10.8 3.33334 3.33334 10.8 3.33334 20C3.33334 29.2 10.8 36.6667 20 36.6667H28.3333V35V33.3333H20C12.7667 33.3333 6.66668 27.2333 6.66668 20C6.66668 12.7667 12.7667 6.66668 20 6.66668C27.2333 6.66668 33.3333 12.7667 33.3333 20V22.3833C33.3333 23.7 32.15 25 30.8333 25C29.5167 25 28.3333 23.7 28.3333 22.3833V20C28.3333 15.4 24.6 11.6667 20 11.6667C15.4 11.6667 11.6667 15.4 11.6667 20C11.6667 24.6 15.4 28.3333 20 28.3333C22.3 28.3333 24.4 27.4 25.9 25.8833C26.9833 27.3667 28.85 28.3333 30.8333 28.3333C34.1167 28.3333 36.6667 25.6667 36.6667 22.3833V20C36.6667 10.8 29.2 3.33334 20 3.33334ZM20 25C17.2333 25 15 22.7667 15 20C15 17.2333 17.2333 15 20 15C22.7667 15 25 17.2333 25 20C25 22.7667 22.7667 25 20 25Z" stroke="#FFD765" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skel;