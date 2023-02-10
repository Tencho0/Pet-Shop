import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Hero } from './components/Hero/Hero';
import { Navigation } from './components/Navigation/Navigation';
import { Topbar } from './components/Topbar/Topbar';
import { About } from './components/About/About';
import { ServicesComponent } from './components/ServicesComponent/ServicesComponent';
import { Products } from './components/Products/Products';
import { Offer } from './components/Offer/Offer';
import { PricingPlan } from './components/PricingPlan/PricingPlan';
import { Team } from './components/Team/Team';
import { Blog } from './components/Blog/Blog';
import { Footer } from './components/Footer';

function App() {
    return (
        <div>
            <Topbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Navigation />} />
                    <Route path="/" element={<Hero />} />

                    {/* <!-- Video Modal Start --> */}
                    {/* <div className="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                             <!-- 16:9 aspect ratio --> 
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                                    allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                    {/* <!-- Video Modal End --> */}


                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<ServicesComponent />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/pricingPlan" element={<PricingPlan />} />
                    <Route path="/team" element={<Team />} />

                    {/* <!-- Testimonial Start --> */}
                    {/* <div className="container-fluid bg-testimonial py-5" style="margin: 45px 0;">
                <div className="container py-5">
                    <div className="row justify-content-end">
                        <div className="col-lg-7">
                            <div className="owl-carousel testimonial-carousel bg-white p-5">
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-4">
                                        <img className="img-fluid mx-auto" src="img/testimonial-1.jpg" alt="">
                                            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style="width: 45px; height: 45px;">
                                                <i className="bi bi-chat-square-quote text-primary"></i>
                                            </div>
                                    </div>
                                    <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr className="w-25 mx-auto">
                                        <h5 className="text-uppercase">Client Name</h5>
                                        <span>Profession</span>
                                </div>
                                <div className="testimonial-item text-center">
                                    <div className="position-relative mb-4">
                                        <img className="img-fluid mx-auto" src="img/testimonial-2.jpg" alt="">
                                            <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style="width: 45px; height: 45px;">
                                                <i className="bi bi-chat-square-quote text-primary"></i>
                                            </div>
                                    </div>
                                    <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                                    <hr className="w-25 mx-auto">
                                        <h5 className="text-uppercase">Client Name</h5>
                                        <span>Profession</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                    {/* <!-- Testimonial End --> */}

                    <Route path="/blog" element={<Blog />} />
                    <Route path="/" element={<Footer />} />

                    {/* <!-- Back to Top --> */}
                    {/* <Link to="#" className="btn btn-primary py-3 fs-4 back-to-top"><i className="bi bi-arrow-up"></i></Link> */}

                </Routes>
            </Router>

            {/* <!-- JavaScript Libraries --> */}
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>

            {/* <!-- Template Javascript --> */}
            <script src="js/main.js"></script>
        </div>
    );
}

export default App;
