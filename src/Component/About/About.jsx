import React from 'react'
import Footer from '../Footer/Footer';
import truck from "../Home/img/truck.png"
import jcb from "../Home/img/jcb.png"
import about from "../Home/img/about.png"
import Background1 from "../Home/img/alice-donovan-rouse-tMHAmxLyzvA-unsplash.jpg"
import 'swiper/css'
import { Swiper, SwiperSlide } from "swiper/react"



export const About = () => {
    const TestimonialsData = [
        {
            // image : profile1,
            name: "Diane Hurst",
            nam2: "IT sourcing Manager",
            comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
            // name: "John Alendon"
        },
        {
            // image : profile2,
            name: "Damein Cochran",
            nam2: "Sales Associate",
            comment: " The very best. Found odometer rollbacks. Report impressed me on multiple levels",
            // name: "Natasha"
        },
        {
            // image : profile1,
            name: "Sophia-Rose Butler",
            nam2: "Medical Assistant",
            comment: " >Wow! Worth much more than I paid. This report is the real deal! Thank you!",
            // name: "Alex Hormonzi"
        },
        {
            // image : profile1,
            name: "Diane Hurst",
            nam2: "IT sourcing Manager",
            comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
            // name: "John Alendon"
        },
        {
            // image : profile2,
            name: "Damein Cochran",
            nam2: "Sales Associate",
            comment: "The very best. Found odometer rollbacks. Report impressed me on multiple levels",
            // name: "Natasha"
        },
        {
            // image : profile1,
            name: "Sophia-Rose Butler",
            nam2: "Medical Assistant",
            comment: "Wow! Worth much more than I paid. This report is the real deal! Thank you!",
            // name: "Alex Hormonzi"
        }
    ]
    return (
        <>
            {/* <Navbar3/> */}
            <div class="page-heading header-text" style={{ backgroundImage: `url(${Background1})` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h3>About</h3>
                            <span style={{ color: "white" }} class="breadcrumb"><a style={{ color: "white" }} href="#">Home</a> / Properties</span>

                        </div>
                    </div>
                </div>
            </div>
            {/* about */}

            <br />
            <div className="about">
                <div className="container-fluid">
                    <div className="row d_flex">
                        <div className="col-md-6">
                            <div className="titlepage">
                                <h2 style={{ color: "black" }}>About Ahmed & Rehman Builders</h2>
                                <span>ARK Builders is an independent and fast-growing real estate advisory firm and construction company. We are committed to building a world-class organization on the fundamental tenets of trust, transparency & quality. ARK Builders is owned and managed by an experienced and accomplished team of professionals. They have worked across Pakistan and understand the market dynamics and trends that allow them to make the best-personalized recommendations for your real estate Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolore doloremque facilis assumenda laboriosam cum et, vel accusantium non, vitae sequi? Corrupti officiis deleniti quae laudantium labore eum quidem doloribus? investments. We at ARK Builders have worked and engaged with global Pakistani Community throughout our career, therefore, it is natural to understand the inevitable demand for real estate investments and associated decision-making dilemma. Our vision to streamline this decision-making process led us in the inception of ARK Builders.!</span>
                                <a className="read_more" href="Javascript:void(0)"> Read More</a>
                            </div>
                        </div>
                        <br />
                        <div className="col-md-5">
                            <div className="about_img">
                                <figure><img src={about} alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of about */}
            <section class="section-services section-t8" style={{marginTop:"30px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-wrap d-flex justify-content-between">
                                <div className="title-box">
                                    <h2 className="title-a">Our Services</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-box-c foo">
                                <div className="card-header-c d-flex">
                                    <div className="card-box-ico">
                                        <span className="fa fa-gamepad"></span>
                                    </div>
                                    <div className="card-title-c align-self-center">
                                        <h2 className="title-c">Lifestyle</h2>
                                    </div>
                                </div>
                                <div className="card-body-c">
                                    <p className="content-c">
                                        Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                        convallis a pellentesque
                                        nec, egestas non nisi.
                                    </p>
                                </div>
                                <div className="card-footer-c">
                                    <a href="#" className="link-c link-icon">Read more
                                        <span className="ion-ios-arrow-forward"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-c foo">
                                <div className="card-header-c d-flex">
                                    <div className="card-box-ico">
                                        <span className="fa fa-usd"></span>
                                    </div>
                                    <div className="card-title-c align-self-center">
                                        <h2 className="title-c">Loans</h2>
                                    </div>
                                </div>
                                <div className="card-body-c">
                                    <p className="content-c">
                                        Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit
                                        aliquet elit, eget tincidunt
                                        nibh pulvinar a.
                                    </p>
                                </div>
                                <div className="card-footer-c">
                                    <a href="#" className="link-c link-icon">Read more
                                        <span className="ion-ios-arrow-forward"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-c foo">
                                <div className="card-header-c d-flex">
                                    <div className="card-box-ico">
                                        <span className="fa fa-home"></span>
                                    </div>
                                    <div className="card-title-c align-self-center">
                                        <h2 className="title-c">Sell</h2>
                                    </div>
                                </div>
                                <div className="card-body-c">
                                    <p className="content-c">
                                        Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa,
                                        convallis a pellentesque
                                        nec, egestas non nisi.
                                    </p>
                                </div>
                                <div className="card-footer-c">
                                    <a href="#" className="link-c link-icon">Read more
                                        <span className="ion-ios-arrow-forward"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end of services */}
             <br />
            {/* testimonials */}
            <div className="testimonials">
                <h3 h3 className="display-5 fw-bold " style={{ color: "rgb(167,12,24)", textAlign: "center", fontFamily: "protestStrike" }}>What Our Client Say About Us</h3 >
                <br />
                <div className="wrapper1">
                </div>
                <div className="carousel2" >
                    <Swiper
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                            546: {
                                // width: 576,
                                slidesPerView: 2,
                            },
                            768: {
                                // width: 768,
                                slidesPerView: 4,
                            },

                        }}
                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={20}
                        className="t1Carousel">
                        {
                            TestimonialsData.map((testimonials, i) => (
                                <SwiperSlide>
                                    <div className="testimonial">
                                        <span>{testimonials.name}</span>
                                        <span>{testimonials.nam2}</span>
                                        <span>{testimonials.comment}</span>
                                        <hr />
                                        <span>{testimonials.name}</span>

                                    </div>
                                </SwiperSlide>))
                        }



                    </Swiper>

                </div>
            </div>

            {/* end of testimonials */}
            {/* truck */}
            <div className="truck">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 jkhgkj">
                            <div className="truck_img1">
                                <img src={truck} alt="#" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="truck_img1 hassaan">
                                <img src={jcb} alt="#" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default About