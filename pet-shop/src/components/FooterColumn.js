import { Link } from "react-router-dom";

export const FooterColumn = () => {
    return (
        <div className="col-lg-3 col-md-6">
            <h5 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Quick Links</h5>
            <div className="d-flex flex-column justify-content-start">
                <Link className="text-body mb-2" to="/"><i className="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                <Link className="text-body mb-2" to="/about"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                <Link className="text-body mb-2" to="/service"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                <Link className="text-body mb-2" to="/team"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</Link>
                <Link className="text-body mb-2" to="/blog"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</Link>
                <Link className="text-body" to="/contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
            </div>
        </div>
    );
} 