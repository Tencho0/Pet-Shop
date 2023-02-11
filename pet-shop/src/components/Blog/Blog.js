
import { Article } from "./Articles/Article";
import { defaultArticles } from "../../Constants/Constants";

export const Blog = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="border-start border-5 border-primary ps-5 mb-5" style={{ "maxWidth": "600px" }}>
                    <h6 className="text-primary text-uppercase">Latest Blog</h6>
                    <h1 className="display-5 text-uppercase mb-0">Latest Articles From Our Blog Post</h1>
                </div>
                <div className="row g-5">

                    {
                        defaultArticles.length > 0
                            ? defaultArticles.map(x => <Article key={x._Id} article={x} />)
                            : ''
                    }

                </div>
            </div>
        </div>
    );
}