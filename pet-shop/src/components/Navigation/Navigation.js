import { Link } from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
            <Link to="index" className="navbar-brand ms-lg-5">
                <h1 className="m-0 text-uppercase text-dark"><i className="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="index" className="nav-item nav-link active">Home</Link>
                    <Link to="about" className="nav-item nav-link">About</Link>
                    <Link to="service" className="nav-item nav-link">Service</Link>
                    <Link to="product" className="nav-item nav-link">Product</Link>
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="price" className="dropdown-item">Pricing Plan</Link>
                            <Link to="team" className="dropdown-item">The Team</Link>
                            <Link to="testimonial" className="dropdown-item">Testimonial</Link>
                            <Link to="blog" className="dropdown-item">Blog Grid</Link>
                            <Link to="detail" className="dropdown-item">Blog Detail</Link>
                        </div>
                    </div>
                    <Link to="contact" className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </nav>
    );
}