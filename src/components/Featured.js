function Featured(props) {
    return (
        <div className="col-lg-4 card boxResults">
            <a
                href={props.link}>
                <img className="card-top img-responsive image"
                    src={props.link}
                    alt="House" style={{ width: '100%' }} />
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p>Rating: {props.rate} / 5</p>
                <a href={props.booklink} className="btn btn-secondary" rel="noopener noreferrer" target="_blank">Book Room</a>
            </div>

        </div>
    );
}
export default Featured;