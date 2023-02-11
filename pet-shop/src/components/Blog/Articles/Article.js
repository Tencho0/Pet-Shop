
import { Link } from "react-router-dom";

export const Article = ({article}) => {
    return (
        <div className="col-lg-6">
            <div className="blog-item">
                <div className="row g-0 bg-light overflow-hidden">
                    <div className="col-12 col-sm-5 h-100">
                        <img className="img-fluid h-100" alt="" src={article.imageUrl} style={{ "objectFit": "cover" }} />
                    </div>
                    <div className="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                        <div className="p-4">
                            <div className="d-flex mb-3">
                                <small className="me-3"><i className="bi bi-bookmarks me-2"></i>{article.breed}</small>
                                <small><i className="bi bi-calendar-date me-2"></i>{article.date}</small>
                            </div>
                            <h5 className="text-uppercase mb-3">{article.title}</h5>
                            <p>{article.description}</p>
                            <Link className="text-primary text-uppercase" to="/detail">Read More<i className="bi bi-chevron-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}