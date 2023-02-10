
import { Link } from "react-router-dom";

export const Post = () => {
    return (
        <div className="d-flex overflow-hidden mb-3">
            <img className="img-fluid" src="img/blog-1.jpg" style={{"width": "100px", "height": "100px", "objectFit": "cover"}} alt="" />
            <Link to="" className="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
            </Link>
        </div>
    );
}