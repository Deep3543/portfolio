import "animate.css";

import { ReactComponent as Email } from "../../assets/icons/home_email.svg";
import { ReactComponent as Github } from "../../assets/icons/home_github.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/home_linkedin.svg";

export default function Skel() {
    return (
        // Frame
        <div className="frame" id="home">
            {/* Background elements */}

            <div className="back-design">
                <div className="icon back-svg line-1">
                    <svg
                        width="15"
                        height="240"
                        viewBox="0 0 15 240"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="7.5"
                            y1="7.5"
                            x2="7.50001"
                            y2="232.5"
                            stroke="black"
                            strokeOpacity="0.3"
                            strokeWidth="15"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div className="icon back-svg circle">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="20"
                            cy="20"
                            r="20"
                            fill="black"
                            fillOpacity="0.3"
                        />
                    </svg>
                </div>
                <div className="icon back-svg line-2">
                    <svg
                        width="15"
                        height="240"
                        viewBox="0 0 15 240"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line
                            x1="7.5"
                            y1="7.5"
                            x2="7.50001"
                            y2="232.5"
                            stroke="black"
                            strokeOpacity="0.3"
                            strokeWidth="15"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <span className="back-svg scroll-right">
                    <p className="scroll-text">scroll down</p>
                    <div className="icon arrow-down animate__animated animate__bounce">
                        <svg
                            width="16"
                            height="67"
                            viewBox="0 0 16 67"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 1C9 0.447715 8.55228 -2.41411e-08 8 0C7.44772 2.41411e-08 7 0.447715 7 1L9 1ZM7.2929 66.7071C7.68342 67.0976 8.31659 67.0976 8.70711 66.7071L15.0711 60.3431C15.4616 59.9526 15.4616 59.3195 15.0711 58.9289C14.6805 58.5384 14.0474 58.5384 13.6569 58.9289L8 64.5858L2.34315 58.9289C1.95262 58.5384 1.31946 58.5384 0.928935 58.9289C0.53841 59.3195 0.53841 59.9526 0.928935 60.3431L7.2929 66.7071ZM7 1L7 66L9 66L9 1L7 1Z"
                                fill="#D1D2F9"
                                fillOpacity="0.5"
                            />
                        </svg>
                    </div>
                </span>
            </div>

            {/* TODO: Add Hover Effects for the social handles */}
            {/* Socials */}
            <div className="socials">
                <div className="icon github">
                    <a
                        href="https://github.com/Deep3543"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Github />
                    </a>
                </div>
                <div className="icon linkedin">
                    <a
                        href="https://www.linkedin.com/in/deeppatel3543/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Linkedin />
                    </a>
                </div>
                <div className="icon email">
                    <a
                        href="mailto:deeppatel3543@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Email />
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="content">
                <h1 className="greet">Heyya 👋</h1>
                <h3 className="name">
                    It's
                    <span className="span-name">
                        <p className="p-name">Deep</p>
                    </span>
                    here!
                </h3>
                <p className="details">
                    A friendly neighborhood geek 🤓 <br /> [& part-time weeb]
                </p>
            </div>
        </div>
    );
}
