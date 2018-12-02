import React from 'react';
import {MDBCard, CardTitle, CardBody, MDBContainer} from 'mdbreact';


import {Link} from "react-router-dom";

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    componentDidMount() {

    }

    render(){
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                height: "100vh",
                width: "100vw"
            }}>
                <MDBContainer>
                    <MDBCard style={{padding: "40px",
                        background:"url(../jumbobg.png)",
                        backgroundSize: "100% 100%",
                        backgroundRepeat: "no-repeat"
                    }}>
                        <CardTitle>{this.state.user.displayName}</CardTitle>
                        <CardBody>
                            <Link className="btn" style={{backgroundColor: "#8EBB88",width: "150px"}} to={'../'}>Go back</Link>
                        </CardBody>

                    </MDBCard>
                </MDBContainer>
            </div>
        )
    }
}

export default Profile;