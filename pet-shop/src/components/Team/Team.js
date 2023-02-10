import { Link } from "react-router-dom";


export const Team = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ "max-width": "600px" }}>
                    <h6 className="text-primary text-uppercase">Team Members</h6>
                    <h1 className="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                </div>
                <div className="owl-carousel team-carousel position-relative" style={{ "padding-right": "25px" }}>
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                            <div className="team-overlay">
                                <div className="d-flex align-items-center justify-content-start">
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-twitter"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-facebook"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">Full Name</h5>
                            <p className="m-0">Designation</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-2.jpg" alt="" />
                            <div className="team-overlay">
                                <div className="d-flex align-items-center justify-content-start">
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-twitter"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-facebook"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">Full Name</h5>
                            <p className="m-0">Designation</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-3.jpg" alt="" />
                            <div className="team-overlay">
                                <div className="d-flex align-items-center justify-content-start">
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-twitter"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-facebook"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">Full Name</h5>
                            <p className="m-0">Designation</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-4.jpg" alt="" />
                            <div className="team-overlay">
                                <div className="d-flex align-items-center justify-content-start">
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-twitter"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-facebook"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">Full Name</h5>
                            <p className="m-0">Designation</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="img/team-5.jpg" alt="" />
                            <div className="team-overlay">
                                <div className="d-flex align-items-center justify-content-start">
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-twitter"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-facebook"></i></Link>
                                    <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light text-center p-4">
                            <h5 className="text-uppercase">Full Name</h5>
                            <p className="m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}