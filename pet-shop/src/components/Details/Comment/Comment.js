
export const Comment = ({user}) => {
    return (
        <div className="d-flex mb-4">
            <img src={user.imageUrl} className="img-fluid" style={{ "width": "45px", "height": "45px" }} alt="" />
            <div className="ps-3">
                <h6>{user.FullName} <small><i>{user.date}</i></small></h6>
                <p>{user.comment}</p>
            </div>
        </div>
    );
}