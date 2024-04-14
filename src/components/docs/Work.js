import Button from "../ui/button";
import { ReactComponent as GithubIcon } from "../../assets/icons/work_github.svg";
import Nav from "../docs/views/Nav-dif";
import Work1 from "../../assets/w_paperstate.png";
import Work2 from "../../assets/w_deakintrack.png";

function Work() {
    const work = [
        {
            imgSrc: Work1,
            altText: "PaperState Webpage",
            title: "Web : PaperState",
            description:
                "An online LaTeX text-editor web application for PhD students and lecturers/",
        },
        {
            imgSrc: Work2,
            altText: "DeakinTrack Application Prototype",
            title: "App : DeakinTrack",
            description:
                "An android application for Deakin University students|staff for easy navigation/",
        },
    ];

    return (
        // Frame for Work Page
        <div className="work-container" id="work">
            <Nav />
            {/* Work Page Container */}
            <div className="work-content">
                {/* Header */}
                <h3 className="head work-header">
                    A few pieces of my work that I am proud of!
                </h3>
                {/* Work Cards */}
                <ul className="work-cards">
                    {work.map((item, index) => (
                        <li key={index} className="work-card">
                            {/* Work Image */}
                            <img
                                src={item.imgSrc}
                                alt={item.altText}
                                className="card-img"
                            />
                            <div className="card-overlay">
                                <div className="card-header">
                                    <svg
                                        className="card-arc"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z" />
                                    </svg>
                                    <div className="card-header-text">
                                        <p className="work-title">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                                <div className="card-description">
                                    <p className="work-details">
                                        {item.description}
                                    </p>
                                    <Button
                                        className="work-source"
                                        icon={<GithubIcon />}
                                    >
                                        Where’s your source?
                                    </Button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Work;
