import React, { Component } from "react";
import Work1 from '../../assets/w_paperstate.png';

class Work extends Component{
    render(){
        return(
            // Frame for Work Page
            <div className="work-container" id="work">
                {/* Work Page Container */}
{/* TODO: Create the work cards and add atleast 2 work cards */}
{/* FIXME: Reformat the CSS to change the animation styles and look */}
                <div className="work-content">
                    {/* Header */}
                    <h3 className="head work-header">A few pieces of my work that I am proud of!</h3>
                    {/* Work Cards */}
                    <ul className="work-cards">
                        <li className="work-card">
                            {/* Work Image */}
                            <img src={Work1} alt="Image of PaperState Webpage" className="card-img"/>
                            <div className="card-overlay">
                                <div className="card-header">
                                    <svg class="card-arc" xmlns="http://www.w3.org/2000/svg"><path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z"/></svg>
                                    <div className="card-header-text">
                                        <p className="work-title">Web : PaperState</p>
                                    </div>
                                </div> 
                                <div className="card-description">
                                    <p className="work-details">An online LaTeX text-editor web application for PhD students and lecturers/</p>
                                    <button className="work-source"><span className="button-desc"> Where’s your source?</span>
                                        <i className="i-git">
                                            <svg className="github" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9994 0.373715C6.71686 0.373715 0 7.08945 0 15.3731C0 22.0009 4.29741 27.6215 10.2575 29.6058C11.0077 29.7447 11.2834 29.2797 11.2834 28.8832C11.2834 28.5256 11.2684 27.3441 11.2623 26.0917C7.08895 26.9992 6.2092 24.3212 6.2092 24.3212C5.52708 22.5871 4.54378 22.126 4.54378 22.126C3.18291 21.1941 4.64733 21.2146 4.64733 21.2146C6.15323 21.3199 6.94608 22.7593 6.94608 22.7593C8.28483 25.0526 10.4562 24.3887 11.3116 24.0061C11.4467 23.0367 11.8342 22.3745 12.2639 21.9997C8.93198 21.6216 5.42963 20.3349 5.42963 14.5869C5.42963 12.9498 6.0165 11.6111 6.97486 10.5613C6.81877 10.1826 6.30497 8.65789 7.11938 6.5922C7.11938 6.5922 8.37891 6.18861 11.2457 8.1297C12.4416 7.79806 13.7244 7.63086 14.9984 7.62532C16.2734 7.63086 17.5584 7.7975 18.756 8.1297C21.6189 6.18973 22.8773 6.5922 22.8773 6.5922C23.6928 8.65845 23.1813 10.1843 23.0251 10.5613C23.9868 11.6111 24.5687 12.9498 24.5687 14.5869C24.5687 20.3482 21.0586 21.6149 17.7195 21.9864C18.2577 22.4515 18.7382 23.3644 18.7382 24.763C18.7382 26.7688 18.7211 28.3855 18.7211 28.8788C18.7211 29.278 18.9913 29.7447 19.752 29.5985C25.7086 27.6132 30.0006 21.9919 30.0006 15.3681C30.0006 7.08551 23.2848 0.368652 15.0006 0.368652L14.9995 0.373668L14.9994 0.373715Z" fill="#FFD765"/>
                                            </svg>
                                        </i>
                                    </button>
                                </div> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Work;