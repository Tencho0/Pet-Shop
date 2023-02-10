
import { Link } from "react-router-dom";

export const Comment = () => {
    return (
        <div className="d-flex mb-4">
            <img src="img/user.jpg" className="img-fluid" style={{ "width": "45px", "height": "45px" }} alt=""/>
            <div className="ps-3">
                <h6><Link to="">John Doe</Link> <small><i>01 Jan 2045</i></small></h6>
                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                <button className="btn btn-sm btn-light">Reply</button>
            </div>
        </div>
    );
}