import Modal from "./Modal";

function Card(props) {
    return (
        <>
            <div className="col-lg-4 card">
                <a href={props.image}>
                    <img className="card-top img-responsive image" src={props.image} alt={props.name} style={{ width: '100%' }} />
                </a>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p>{"$" + props.price}</p>
                    <button className="btn btn-secondary" data-toggle="modal" type="button" data-target={"#" + props.userId} style={{ padding: "5px", margin: "5px" }}>Show More Info</button>
                    <a href={props.booking} className="btn btn-dark" rel="noopener noreferrer" target="_blank" style={{ padding: "5px", margin: "5px" }}>Book Room</a>

                </div>
            </div>
            <Modal name={props.name} bedrooms={props.bedrooms} bathrooms={props.bathrooms} beds={props.beds} address={props.address} userId={props.userId} type={props.type} imgone={props.imgone} imgtwo={props.imgtwo} imgthree={props.imgthree} imgfour={props.imgfour} reviews={props.reviews} rating={props.rating} persons={props.persons} />



        </>

    );

}
export default Card;