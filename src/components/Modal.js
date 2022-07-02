import Carousel from "./Carousel";

function Modal(props) {
    return (
        <div className="modal fade" id={props.userId} tabIndex="-1" role="dialog" aria-labelledby="modalResultsTitle"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document" id="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalResultsLongTitle">{props.name}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" id="modalBody">
                        <Carousel userId={props.userId} imgone={props.imgone} imgtwo={props.imgtwo} imgthree={props.imgthree} imgfour={props.imgfour} />
                        <h5 className="roomInfo">Room Info</h5>
                        <ul className="list-group" id="list">
                            <li className="list-group-item" id="city">{"City: " + props.address}</li>
                            <li className="list-group-item" id="price">{"Total Price: $" + props.price}</li>
                            <li className="list-group-item" id="bedrooms">{props.bedrooms + " Bedrooms"}</li>
                            <li className="list-group-item" id="bathrooms">{props.bathrooms + " Bathrooms"}</li>
                            <li className="list-group-item" id="beds">{props.beds + " Beds"}</li>
                            <li className="list-group-item" id="type">{"Type: " + props.type}</li>
                            <li className="list-group-item" id="persons">{"Number of people: " + props.persons}</li>
                        </ul>
                        <h5 className="roomInfo">Other Info</h5>
                        <ul className="list-group">
                            <li className="list-group-item">{"Review Count: " + props.reviews}</li>
                            <li className="list-group-item">{"Rating: " + props.rating + "/5"}</li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-dark" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>


    );

}
export default Modal;