import { Component } from "react";

class Nav extends Component {
    // TODO: Add Responsive Blob Cursor for links
    render() {
        return (
            // Nav Bar
            <nav>
                <div className="nav-container">
                    {/* Navigation Menu Items */}
                    <div className="logo">
                        <svg
                            width="50"
                            height="50"
                            viewBox="0 0 50 50"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="50"
                                height="50"
                                rx="18"
                                fill="#6E85B2"
                            />
                            <g filter="url(#filter0_d)">
                                <path
                                    d="M17.9167 19.1667L13.3333 8.33337M17.9167 19.1667V30.2359C17.9167 30.9052 17.7823 31.5677 17.5215 32.1841L13.3333 42.0834M17.9167 19.1667H26.25C29.0114 19.1667 31.25 16.9281 31.25 14.1667V8.33337M17.9167 19.1667H13.3333M13.3333 8.33337H31.25M13.3333 8.33337V19.1667M13.3333 42.0834H28.3026C30.1213 42.0834 31.8081 41.1015 32.6402 39.4843C39.1592 26.815 38.7699 19.5949 31.25 8.33337M13.3333 42.0834V19.1667"
                                    stroke="#261C2C"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d"
                                    x="9.33334"
                                    y="4.33337"
                                    width="35.8975"
                                    height="45.75"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood
                                        flood-opacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dx="2" dy="2" />
                                    <feGaussianBlur stdDeviation="2.5" />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0.341176 0 0 0 0 0.188235 0 0 0 0 0.368627 0 0 0 1 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="menu"></div>
                </div>
            </nav>
        );
    }
}

export default Nav;
