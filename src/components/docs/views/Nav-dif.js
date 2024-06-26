import { useEffect, useRef, useState } from "react";

import { Link } from "react-scroll";
import Resume from "../../../assets/resume.pdf";

const Nav = () => {
    const navbar = useRef(null);
    const [navSticky, setNavSticky] = useState(false);

    const handleScroll = () => {
        const height = document.documentElement.clientHeight;
        const top = navbar.current.offsetTop;
        window.scrollY >= top ? setNavSticky(true) : setNavSticky(false);
        window.scrollY <= height - 1 ? setNavSticky(false) : setNavSticky(true);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    let classSticky = navSticky ? "sticky" : "";
    return (
        <nav ref={navbar} className={`nav-bar ${classSticky}`}>
            {/* TODO: Make Nav Bar responsive with collapsed bar and icon */}
            <div className="nav-content">
                <ul className="nav-list">
                    <li>
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                        >
                            Home
                        </Link>
                    </li>
                    {/* Work Button */}
                    <li>
                        <Link
                            activeClass="active"
                            to="work"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                        >
                            Work
                        </Link>
                    </li>
                    {/* Find Me Button */}
                    <li>
                        <Link
                            activeClass="active"
                            to="find"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={900}
                        >
                            Find Me
                        </Link>
                    </li>
                    {/* Resume Button */}
                    <li className="resume" name="Resume">
                        <a
                            href={Resume}
                            download="Resume_Deep_Patel"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Resume
                            <i className="i-download">
                                <svg
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.33 18.75L26.3298 23.75C26.3298 24.413 24.3784 23.5099 23.9096 23.9787C23.4407 24.4476 24.4928 26.25 23.8298 26.25H6.32979C5.66675 26.25 6.37842 24.4476 5.90958 23.9787C5.44074 23.5099 3.82979 24.413 3.82979 23.75L6.83 18.75"
                                        stroke="#FFD765"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20.6966 18.9787L22.8298 22.3121C22.8298 22.7541 21.4421 22.152 21.1087 22.4645C20.7754 22.7771 21.5235 23.9787 21.052 23.9787H8.60757C8.13607 23.9787 8.64215 22.7771 8.30875 22.4645C7.97535 22.152 6.82979 22.7541 6.82979 22.3121L8.96327 18.9787"
                                        stroke="#FFD765"
                                        strokeWidth="0.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.82979 13.5L15.0798 19.75L21.3298 13.5"
                                        stroke="#FFD765"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14.8298 18.75V3.75"
                                        stroke="#FFD765"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;
