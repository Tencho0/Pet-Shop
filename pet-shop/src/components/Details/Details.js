import { Link } from "react-router-dom";
import { Comment } from "./Comment/Comment";
import { Post } from "./Post/Post";


export const Details = () => {
    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    {/* Blog Detail Start  */}
                    <div className="mb-5">
                        <img className="img-fluid w-100 rounded mb-5" src="img/blog-1.jpg" alt="" />
                        <h1 className="text-uppercase mb-4">Diam dolor est labore duo ipsum clita sed et lorem tempor duo</h1>
                        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                            magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                            amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                            sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                            aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                            sit stet no diam kasd vero.</p>
                        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                            vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                            nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                            ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                            clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                            justo dolore sit invidunt.</p>
                        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                            invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                            lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                            rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                            sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                            lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                            sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
                    </div>
                    {/* Blog Detail End  */}

                    {/* Comment List Start  */}
                    <div className="mb-5">
                        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">3 Comments</h3>
                        <Comment />
                        <Comment />
                        <Comment />
                    </div>
                    {/* Comment List End  */}

                    {/* Comment Form Start  */}
                    <div className="bg-light rounded p-5">
                        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Leave a comment</h3>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{"height": "55px"}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{"height": "55px"}} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{"height": "55px"}} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Leave Your Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Comment Form End  */}
                </div>

                {/* Sidebar Start  */}
                <div className="col-lg-4">
                    {/* Search Form Start  */}
                    <div className="mb-5">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Keyword" />
                            <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    {/* Search Form End  */}

                    {/* {/* Category Start  */}
                    <div className="mb-5">
                        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Categories</h3>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="h5 bg-light py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Web Design</Link>
                            <Link className="h5 bg-light py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Web Development</Link>
                            <Link className="h5 bg-light py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Web Development</Link>
                            <Link className="h5 bg-light py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Keyword Research</Link>
                            <Link className="h5 bg-light py-2 px-3 mb-2" to="#"><i className="bi bi-arrow-right me-2"></i>Email Marketing</Link>
                        </div>
                    </div>
                    {/* Category End  */}

                    {/* Recent Post Start  */}
                    <div className="mb-5">
                        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Recent Post</h3>
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    {/* Recent Post End  */}

                    {/* Image Start  */}
                    <div className="mb-5">
                        <img src="img/blog-1.jpg" alt="" className="img-fluid rounded" />
                    </div>
                    {/* Image End  */}

                    {/* Tags Start  */}
                    <div className="mb-5">
                        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Tag Cloud</h3>
                        <div className="d-flex flex-wrap m-n1">
                            <Link to="#" className="btn btn-primary m-1">Design</Link>
                            <Link to="#" className="btn btn-primary m-1">Development</Link>
                            <Link to="#" className="btn btn-primary m-1">Marketing</Link>
                            <Link to="#" className="btn btn-primary m-1">SEO</Link>
                            <Link to="#" className="btn btn-primary m-1">Writing</Link>
                            <Link to="#" className="btn btn-primary m-1">Consulting</Link>
                            <Link to="#" className="btn btn-primary m-1">Design</Link>
                            <Link to="#" className="btn btn-primary m-1">Development</Link>
                            <Link to="#" className="btn btn-primary m-1">Marketing</Link>
                            <Link to="#" className="btn btn-primary m-1">SEO</Link>
                            <Link to="#" className="btn btn-primary m-1">Writing</Link>
                            <Link to="#" className="btn btn-primary m-1">Consulting</Link>
                        </div>
                    </div>
                    {/* Tags End  */}

                    {/* Plain Text Start  */}
                    <div>
                        <h3 className="text-uppercase border-start border-5 border-primary ps-3 mb-4">Plain Text</h3>
                        <div className="bg-light text-center" style={{ "padding": "30px" }}>
                            <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                            <Link to="/detail" className="btn btn-primary py-2 px-4">Read More</Link>
                        </div>
                    </div>
                    {/* Plain Text End  */}
                </div>
                {/* Sidebar End  */}
            </div>
        </div>
    );
}