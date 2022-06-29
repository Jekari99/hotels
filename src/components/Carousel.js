function Carousel(props) {
    return (
        <div id={"carouselExampleIndicators" + props.userId} className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target={"#carouselExampleIndicators" + props.userId} data-slide-to="0" className="active"></li>
                <li data-target={"#carouselExampleIndicators" + props.userId} data-slide-to="1"></li>
                <li data-target={"#carouselExampleIndicators" + props.userId} data-slide-to="2"></li>
                <li data-target={"#carouselExampleIndicators" + props.userId} data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={props.imgone} alt="First slide" style={{ width: "100%", borderRadius: "10px" }} />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.imgtwo} alt="Second slide" style={{ width: "100%", borderRadius: "10px" }} />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.imgthree} alt="Third slide" style={{ width: "100%", borderRadius: "10px" }} />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={props.imgfour} alt="Fourth slide" style={{ width: "100%", borderRadius: "10px" }} />
                </div>
            </div>
            <a className="carousel-control-prev" href={"#carouselExampleIndicators" + props.userId} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={"#carouselExampleIndicators" + props.userId} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
export default Carousel;