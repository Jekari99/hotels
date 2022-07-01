import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient " style={{ boxShadow: "2px 5px 5px 2px #595959" }} >
                <a className="navbar-brand" href="/" style={{ fontSize: '36px', fontFamily: 'Merriweather, serif' }}>Hotels</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/rooms" className="nav-link" >Rooms</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/help" className="nav-link" >Help</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}
export default NavBar;