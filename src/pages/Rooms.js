import { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
import Paginate from "../components/Paginate";

function Rooms(props) {

    const [location, setLocation] = useState("");
    const [checkin, setCheckin] = useState("2022-07-21");
    const [checkout, setCheckout] = useState("2022-07-23");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);


    function searchHotels(e) {
        e.preventDefault();
        let results = [];
        const root = ReactDOM.createRoot(document.getElementById("results"));


        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=${infants}&page=1+2`;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8be5da7381msh54cea7aa2a8e3c7p1ec4b8jsn98eb8cca9523',
                'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => json.results.forEach((hotel) => {
                results.push(hotel);
                console.log(hotel);
                root.render(<Paginate data={results} />)
            }))
    }

    return (
        <div>
            <div className="container-fluid" id="imagebg">
                <div className="row" id="roomSearch" style={{ margin: '2rem', padding: '10px' }}>
                    <div className="col-lg-6">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiRdxOgFM66Ta4ogmbm7S1CFNzp1I9liq4Q&usqp=CAU"
                            alt="House" style={{ width: '100%', borderRadius: '10px', boxShadow: '3px 3px 3px 3px lightgray' }} id="roomPic" />
                    </div>
                    <div className="col-lg-6" id="form" style={{ padding: '10px', backgroundColor: '#eee', borderRadius: '10px', boxShadow: '0px 0px 5px 5px #ccc' }}>
                        <h2 style={{ textAlign: 'center' }}>Search Rooms</h2>
                        <form className="form-horizontal row" onSubmit={searchHotels}>
                            <div className="form-group col-lg-12">
                                <label htmlFor="location" className="col-sm-12 control-label">Location</label>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="location" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-lg-6 col-sm-6 ">
                                <label htmlFor="checkin" className="col-sm-12 control-label">Check-in Date</label>
                                <div className="col-sm-12">
                                    <input type="date" className="form-control" id="checkin" value={checkin} onChange={(e) => setCheckin(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-lg-6 col-sm-6">
                                <label htmlFor="checkout" className="col-sm-12 control-label">Check-out Date</label>
                                <div className="col-sm-12">
                                    <input type="date" className="form-control" id="checkout" value={checkout} onChange={(e) => setCheckout(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-lg-4 col-sm-4">
                                <label htmlFor="adults" className="col-sm-12 control-label">Number of Adults</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="adults" value={adults} onChange={(e) => setAdults(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-lg-4 col-sm-4">
                                <label htmlFor="children" className="col-sm-12 control-label">Number of Children</label>
                                <div className="col-sm-12">
                                    <input type="number" className="form-control" id="children" value={children} onChange={(e) => setChildren(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-lg-4 col-sm-4">
                                <label htmlFor="infants" className="col-sm-12 control-label">Number of Infants</label>
                                <div className="col-sm-12">
                                    <input type="number" className="form-control" id="infants" value={infants} onChange={(e) => setInfants(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-group col-lg-12 text-center">
                                <div className="col-sm-offset-2 col-sm-12">
                                    <button type="submit" className="btn btn-dark" >Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <h2 style={{ width: '100%', textAlign: 'center', borderBottom: '1px solid grey', lineHeight: '0.1em', margin: '10px 0 20px' }}><span style={{ background: '#fff', padding: '0 10px' }}>Rooms</span></h2>
            </div>
            <div className="row" id="results" style={{ margin: '2rem', padding: '10px', justifyContent: 'center', textAlign: 'center' }}></div>
        </div >
    );
}
export default Rooms;