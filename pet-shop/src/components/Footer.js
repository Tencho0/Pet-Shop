import { Link } from "react-router-dom";
import { FooterColumn } from "./FooterColumn";

export const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-light mt-5 py-5">
                <div className="container pt-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Get In Touch</h5>
                            <p className="mb-4">No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor</p>
                            <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                            <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                            <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
                        </div>
                        <FooterColumn />
                        <FooterColumn />
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Newsletter</h5>
                            <form action="">
                                <div className="input-group">
                                    <input type="text" className="form-control p-3" placeholder="Your Email" />
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <h6 className="text-uppercase mt-4 mb-3">Follow Us</h6>
                            <div className="d-flex">
                                <Link className="btn btn-outline-primary btn-square me-2" to="#"><i className="bi bi-twitter"></i></Link>
                                <Link className="btn btn-outline-primary btn-square me-2" to="#"><i className="bi bi-facebook"></i></Link>
                                <Link className="btn btn-outline-primary btn-square me-2" to="#"><i className="bi bi-linkedin"></i></Link>
                                <Link className="btn btn-outline-primary btn-square" to="#"><i className="bi bi-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="col-12 text-center text-body">
                            <Link className="text-body" to="">Terms & Conditions</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to="">Privacy Policy</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to="">Customer Support</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to="">Payments</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to="">Help</Link>
                            <span className="mx-1">|</span>
                            <Link className="text-body" to="">FAQs</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white-50 py-4">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="mb-md-0">&copy; <Link className="text-white" to="#">Your Site Name</Link>. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <p className="mb-0">Designed by <Link className="text-white" to="https://htmlcodex.com">HTML Codex</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}