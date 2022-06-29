import Carousel from "../components/Carousel";

function Help() {
    return (
        <div>
            <div className="container-fluid help">
                <h2 id="helptitle">A Variety of Rooms at Your Service</h2>
            </div>
            <div className="container-fluid">
                <Carousel userId="Help" imgone="https://a0.muscache.com/im/pictures/bfdd35ee-d163-4677-bb1b-60ce4dcd60fa.jpg?im_w=720" imgtwo="https://a0.muscache.com/im/pictures/6a974100-1de6-4b55-8bf9-46259babb79d.jpg?im_w=720" imgthree="https://a0.muscache.com/im/pictures/840bca25-989d-444c-9928-59ff4ed6ce8f.jpg?im_w=720" imgfour="https://a0.muscache.com/im/pictures/bdf7de90-21d2-4d24-87ed-34eeb260e2b7.jpg?im_w=720" />
                <br />
                <br />
                <br />
                <div className="row" id="helprow">
                    <div className="col-lg-6">
                        <h3>Simply Input Your Desired Room Information</h3>
                        <img src="/Hotels-Form.png" alt="Form" style={{ width: "100%" }} />
                    </div>
                    <div className="col-lg-6">
                        <h3>Press search to generate a list of rooms that fit your criteria</h3>
                        <img src="/Results-Hotels.png" alt="Results" style={{ width: "100%" }} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="row details" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div className="col-lg-4">
                        <p style={{ fontSize: '20px' }}><i class="bi bi-house-fill" style={{ fontSize: '40px', padding: '5px' }}></i>Variety of Rooms Available</p>
                    </div>
                    <div className="col-lg-4">
                        <p style={{ fontSize: '20px' }}><i className="bi bi-check2-all" style={{ fontSize: '40px', padding: '5px' }}></i>Easy use</p>
                    </div>
                    <div className="col-lg-4">
                        <p style={{ fontSize: '20px' }}><i className="bi bi-person-check-fill" style={{ fontSize: '40px', padding: '5px' }}></i>Great Customer Satisfaction</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}
export default Help;