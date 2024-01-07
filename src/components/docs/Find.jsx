import Email from "../../assets/icons/find_email.svg";
import Github from "../../assets/icons/find_github.svg";
import Insta from "../../assets/icons/find_insta.svg";
import LinkedIn from "../../assets/icons/find_linkedin.svg";

function Find() {
    return (
        // Frame for Find Me Page
        <div className="find-container" id="find">
            {/* Content */}
            <div className="find-content">
                {/* Header */}
                <h3 className="head find-header">Where am I?</h3>
                {/* Description */}
                <p className="details find-details">
                    I am based in Brisbane - Queensland.
                </p>
                <div className="find-ques-container">
                    {/* Questions for Find Me */}
                    {/* FIXME: Need to fix the anchor tags to work for links */}
                    {/* TODO: Create animation effects on hover for social icons */}
                    <div className="find-ques">
                        <div className="find-ques-container-item item-left ques1">
                            I would like to work with/hire you?
                        </div>
                        <div className="find-ques-container-item item-right ans1">
                            <i className="i-email">
                                <img
                                    src={Email}
                                    alt="Email"
                                    className="i-find"
                                />
                            </i>
                            <a href="mailto:deeppatel3543@gmail.com">
                                deeppatel3543@gmail.com
                            </a>
                        </div>
                        <div className="find-ques-container-item item-left ques2">
                            What skills do you possess?
                        </div>
                        <div className="find-ques-container-item item-right ans2">
                            <i className="i-linkedin">
                                <img
                                    src={LinkedIn}
                                    alt="LinkedIn"
                                    className="i-find"
                                />
                            </i>
                            <a href="https://www.linkedin.com/in/deeppatel3543/">
                                deeppatel3543
                            </a>
                        </div>
                        <div className="find-ques-container-item item-left ques3">
                            What kind of project you do?
                        </div>
                        <div className="find-ques-container-item item-right ans3">
                            <i className="i-github">
                                <img
                                    src={Github}
                                    alt="Github"
                                    className="i-find"
                                />
                            </i>
                            <a href="https://github.com/Deep3543">Deep3543</a>
                        </div>
                        <div className="find-ques-container-item item-left ques4">
                            I just wanna say Hi to you!
                        </div>
                        <div className="find-ques-container-item item-right ans4">
                            <i className="i-insta">
                                <img
                                    src={Insta}
                                    alt="Instagram"
                                    className="i-find"
                                />
                            </i>
                            <a href="https://www.instagram.com/deep_3543/">
                                @deep_3543
                            </a>
                        </div>
                        <div className="find-ques-container-item item-left ques5">
                            Do you have a side hobby?
                        </div>
                        <div className="find-ques-container-item item-right ans5">
                            <i className="i-insta">
                                <img
                                    src={Insta}
                                    alt="Instagram"
                                    className="i-find"
                                />
                            </i>
                            <a href="https://www.instagram.com/deepclicks.ig/">
                                @deepclicks.ig
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Find;
