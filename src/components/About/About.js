import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="bg-dark text-white p-3 pb-5">
                    <h1 className="p-3">BEST IT TRAINING INSTITUTE IN THE COUNTRY</h1>
                    <h4>Learn real world software engineering from industry experts. Upgrade your skill to international level.</h4>
                    <i><small>Get Hands On Experience in Real World Software Development from Experts in the Industry. Get Ready for Professional Career.</small></i>
                </div>
                <div className="pt-3 pb-4">
                    <div className="container">
                        <div className="row mt-4">
                            <div className="col text-center mb-3">
                                <h1>
                                    Our Team Members
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <img className="img-fluid qualities-img p-4 rounded-circle" src="https://changemyface.com/wp-content/themes/changemyface-bm/images/demo-img.jpg" alt="" />
                                <h5>
                                    CEO
                                </h5>
                                <p>
                                    <i>- Sohag Raha</i>
                                </p>

                            </div>
                            <div className="col-md-4 text-center">
                                <img className="img-fluid qualities-img p-4 rounded-circle" src="https://cdn.pixabay.com/photo/2020/09/18/22/05/man-5583034_960_720.jpg" alt="" />
                                <h5>
                                    Senior Business Analyst
                                </h5>
                                <p>
                                    <i>- Khalid Bin Sattar</i>
                                </p>

                            </div>
                            <div className="col-md-4 text-center">

                                <img className="img-fluid qualities-img p-4 rounded-circle" src="https://cdn.xxl.thumbs.canstockphoto.com/smiling-hispanic-man-headshot-head-shot-of-handsome-hispanic-man-picture_csp5724667.jpg" alt="" />
                                <h5>
                                    Senior HR
                                </h5>
                                <p>
                                    <i>- Maksud Alam</i>
                                </p>
                            </div>
                        </div>

                        <div className="row mb-md-3">
                            <div className="col-md-4 text-center">
                                <img className="img-fluid qualities-img p-4 rounded-circle" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLKH4ezp2wULtl_BXpCI209OU8Rd5HaTR_Uw&usqp=CAU' alt="" />
                                <h5>
                                    Java Developer
                                </h5>
                                <p>
                                    <i>- Abu Rashed Khan</i>
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img className="img-fluid qualities-img p-4 rounded-circle" src="https://ocgworks.org/wp-content/uploads/2015/05/young-professional-man-portrait.jpg" alt="" />
                                <h5>
                                    Sales Head
                                </h5>
                                <p>
                                    <i>- H. M. Mohidul Islam</i>
                                </p>
                            </div>
                            <div className="col-md-4 text-center">
                                <img className="img-fluid qualities-img p-4 rounded-circle" src="https://cdn.shopify.com/s/files/1/0162/2116/files/Professional-Haircut8.jpg?v=1523605474" alt="" />
                                <h5>
                                    Web Developer
                                </h5>
                                <p>
                                    <i>- Md Shahriar Hossain Sajib</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;