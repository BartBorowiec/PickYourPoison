import React from 'react';
import Header from "./Header";
import {Card, CardBody, CardImage, CardText, CardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";


class NotFound extends React.Component {

    render(){
        return (
            <div>
                <MDBContainer>
                    <Header passQueryString={this.getDrinks}/>
                    <MDBRow>
                        <MDBCol  size="12">
                            <Card className={"mt-3 mb-3"} style={{ width: "50%", margin: "0 auto"}}>
                                <CardImage
                                    className="img-fluid"
                                    src={"https://img.brainjet.com/filter:scale/quill/9/a/3/9/7/9/9a3979541ed151f6e39777f76b9393487ec3382c.jpg?mw=650"}
                                    waves
                                />
                                <CardBody className="text-center">
                                    <CardTitle>Are you lost?</CardTitle>

                                    <CardText>
                                        I think you've had enough
                                    </CardText>
                                </CardBody>
                            </Card>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default NotFound;