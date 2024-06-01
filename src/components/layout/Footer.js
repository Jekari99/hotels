function Footer() {
    return (
        <div>
            <footer className="page-footer font-small bg-secondary bg-gradient footer" style={{ boxShadow: "5px 3px 3px 5px #595959" }}>
                <div className="container text-center text-md-left">
                    <div className="row">
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Hotels</h5>
                            <ul className="list-unstyled">
                                {/* <li>
                                    Made by Jekari Rawls
                                </li> */}
                                <li>
                                    Bootstrap
                                </li>
                                <li>
                                    Airbnb API
                                </li>
                            </ul>
                        </div>
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Project</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://mdbootstrap.com/">Bootstrap</a>
                                </li>
                                <li>
                                    <a href="https://rapidapi.com/3b-data-3b-data-default/api/airbnb13/">API</a>
                                </li>
                            </ul>
                        </div>
                        {/* <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-3 mx-auto">
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Profiles</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.linkedin.com/in/jekari-rawls-a984961a9/">LinkedIn</a>
                                </li>
                                <li>
                                    <a href="https://github.com/Jekari99">GitHub</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="/"> MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
}
export default Footer;