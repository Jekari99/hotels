import Featured from "../components/Featured";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="row" id="home" style={{ margin: '2rem', padding: '10px' }}>
                <div className="col-lg-7">
                    <img className="img-responsive"
                        src="https://a0.muscache.com/im/pictures/afd2cb51-936f-4efa-96b4-5b8dae10bd34.jpg?im_w=720" alt="house"
                        style={{ width: '100%', borderRadius: '10px', boxShadow: '3px 3px 3px 3px lightgray' }} id="homePic" />
                </div>
                <div className="col-lg-5 p-5" id="title" style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'translate(0, 20%)' }}>
                    <h1 style={{ fontFamily: 'Merriweather, serif' }}>Hotels</h1>
                    <h3>A variety of rooms at your service</h3>
                    <button className="btn btn-secondary"><Link to="/rooms" style={{ color: "white", textDecoration: "none" }}>Get Started</Link></button>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container-fluid" id="featured" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ width: '100%', textAlign: 'center', borderBottom: '1px solid grey', lineHeight: '0.1em', margin: '10px 0 20px' }}><span style={{ background: '#fff', padding: '0 10px' }}>Some Featured Places</span></h2>
            </div>

            <div className="row" style={{ margin: '2rem', padding: '10px', justifyContent: 'center', textAlign: 'center' }}>
                <Featured booklink="https://www.airbnb.com/rooms/18332523" rate="4.85" title="Architect's Off-Grid Stargazing Cabin" link="https://a0.muscache.com/4ea/air/v2/pictures/monet/Select-18332523/original/63268478-841f-405e-8747-419c0f087f7f?t=r:w1200-h720-sfit,e:fjpg-c90" />
                <Featured booklink="https://www.airbnb.com/rooms/45932283" rate="4.88" title="Moonset - New Modern Boho Villa Soak Tub & Hot Tub" link="https://a0.muscache.com/im/pictures/miso/Hosting-45932283/original/ed2588b1-73f0-4ee7-80c1-cf52a3254f62.jpeg?im_w=720" />
                <Featured booklink="https://www.airbnb.com/rooms/2093755" rate="4.95" title="Dome in the Desert in Joshua Tree" link="https://a0.muscache.com/4ea/air/v2/pictures/2651dc08-a6ee-44d6-b6fc-62fcf80c632f.jpg?t=r:w1200-h720-sfit,e:fjpg-c90" />
            </div>
            <div className="row" style={{ margin: '2rem', padding: '10px', justifyContent: 'center', textAlign: 'center' }}>
                <Featured booklink="https://www.airbnb.com/rooms/49982245" rate="5" title="Casa Blanca Joshua Tree | Boulder Estate with Hot Tub, Soaking Pool and Outdoor Shower" link="https://a0.muscache.com/im/pictures/prohost-api/Hosting-49982245/original/d57ec965-a88c-4754-afdb-b80c1170d56b.jpeg?im_w=720" />
                <Featured booklink="https://www.airbnb.com/rooms/25298446" rate="4.94" title="Caelum Joshua Tree - Urban Design in Rustic Desert" link="https://a0.muscache.com/im/pictures/6f04ea94-3e4c-4527-80a4-f2c7b9a37ef4.jpg?im_w=720" />
                <Featured booklink="https://www.airbnb.com/rooms/564163876312311900" rate="5" title="Lovely Studio for 4 in Desert Springs" link="https://a0.muscache.com/im/pictures/922aae3c-5e44-4e61-83be-258e2c03e14e.jpg?im_w=720" />

            </div>
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <div className="row details" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div className="col-lg-4">
                        <p style={{ fontSize: '20px' }}><i className="bi bi-clock" style={{ fontSize: '40px', padding: '5px' }}></i>24 Hour Bookings</p>
                    </div>
                    <div className="col-lg-4">
                        <p style={{ fontSize: '20px' }}><i className="bi bi-people" style={{ fontSize: '40px', padding: '5px' }}></i>Great Customer Service</p>
                    </div>
                    <div className="col-lg-4">
                        <p style={{ fontSize: '20px' }}><i className="bi bi-house-door" style={{ fontSize: '40px', padding: '5px' }}></i>Great Rooms</p>
                    </div>
                </div>
                <br />
                <br />
                <br />

                <div className="row picture" style={{ margin: '1rem' }}>
                    <div className="col-lg-6">
                        <img src="https://a0.muscache.com/im/pictures/afd2cb51-936f-4efa-96b4-5b8dae10bd34.jpg?im_w=720"
                            alt="House" style={{ width: "100%", height: '100%', borderRadius: '10px', boxShadow: '0px 0px 5px 5px grey' }} />
                    </div>
                    <div className="col-lg-6">
                        <img src="https://secretnyc.co/wp-content/uploads/2021/12/homealone-1024x683.jpeg"
                            alt="Mccalister House" style={{ width: "100%", height: '100%', borderRadius: '10px', boxShadow: '0px 0px 5px 5px grey' }} />
                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );
}
export default Home;