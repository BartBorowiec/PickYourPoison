import React from 'react';
import {Button, Card, CardBody, CardImage, CardText, CardTitle, MDBCol, MDBContainer, MDBRow} from "mdbreact";


class NotFound extends React.Component {

    render(){
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol  size="12">
                            <Card className={"mt-3 mb-3"} style={{width: "50%", margin: "0 auto"}}>
                                <CardImage
                                    className="img-fluid"
                                    src={"notfound.jpg"}
                                    waves
                                />
                                <CardBody className="text-center">
                                    <CardTitle>Are you lost?</CardTitle>

                                    <CardText>
                                        I think you've had enough
                                    </CardText>
                                    <Button href={"/"}>Go home</Button>
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