import { Component } from "react";
import Landing from "../../assets/avatar.png";
import Email from "../../assets/icon_email.png";
import GitHub from "../../assets/icon_github.png";
import LinkedIn from "../../assets/icon_linkedin.png";

class HomeSkeleton extends Component {
    state = {
        left: 0,
        top: 0,
    };
    // Cursor Implementation
    componentDidMount() {
        document.addEventListener("mousemove", (e) => {
            this.setState({ left: e.pageX, top: e.pageY });
        });
    }

    render() {
        return (
            // TODO: Redesign the Skeleton based on the Wireframes
            // TODO: Make Changes to the design and cursor code for better interactivity.
            // Skeleton for Homepage
            <main className="row">
                {/* Cursor code */}
                <div
                    className="cursor"
                    style={{ left: this.state.left, top: this.state.top }}
                />
                {/* Container for Image & Intro */}
                {/* Code for the Blobs animation goes here : REFER TO UPNOTE for code */}
                {/* -------------------------------------- */}

                {/* Hero Image & Intro */}
                {/* Text Container */}
                <div className="column text margin-left-4">
                    {/* Title */}
                    <div className="text-header">Hello👋</div>
                    {/* Subtitle */}
                    <header className="text-subheader margin-top-10">
                        It's <span className="name">DEEP</span> here!
                    </header>

                    {/* Subtitle and additional text */}
                    <p className="text-desc margin-top-10">
                        A friendly neighborhood geek.
                    </p>
                    <p className="text-desc">Full Stack Developer.</p>

                    <div className="margin-top-15">
                        {/* Explore Portfolio Button */}
                        <a href="#" className="button">
                            <span>Explore Portfolio</span>

                            {/* Icon Arrow Right SVG */}
                            <svg
                                className="svg-arrow"
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M-5.70831 17.5H14.7084"
                                        stroke="#F0CDB8"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M17.5 7.29163L27.7083 17.5L17.5 27.7083"
                                        stroke="#F0CDB8"
                                        stroke-width="3"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect
                                            width="35"
                                            height="35"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                {/* Image Container */}
                <div className="column image">
                    {/* Image */}
                    <img
                        className="avatar-img"
                        src={Landing}
                        alt="avatar-DeepPatel"
                    />
                </div>
                {/* Socials Container */}
                <div className="column socials">
                    <div className="icon-socials">
                        {/* Socials Icons */}
                        <a
                            href="https://www.linkedin.com/in/deeppatel3543/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={LinkedIn} alt="LinkedIn logo" />
                        </a>
                        <a
                            href="https://github.com/Deep3543"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={GitHub} alt="Github logo" />
                        </a>
                        <a
                            href="mailto:deeppatel3543@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={Email} alt="Email Logo" />
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}
export default HomeSkeleton;
