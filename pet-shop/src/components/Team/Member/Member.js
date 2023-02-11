import { Link } from "react-router-dom";

export const Member = ({user}) => {
    return (
        <div className="team-item">
            <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src={user.imageUrl} alt="" />
                <div className="team-overlay">
                    <div className="d-flex align-items-center justify-content-start">
                        <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-twitter"></i></Link>
                        <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-facebook"></i></Link>
                        <Link className="btn btn-light btn-square mx-1" to="#"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>
            </div>
            <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">{user.FullName}</h5>
                <p className="m-0">{user.Designation}</p>
            </div>
        </div>
    );
}