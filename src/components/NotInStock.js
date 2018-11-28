import React from 'react';
import {Card, CardBody, CardImage, CardText, CardTitle, MDBCol} from "mdbreact";

class NotInStock extends React.Component {
    render() {
        return (
            <MDBCol size="12">
                <Card className={"mt-3 mb-3"} style={{width: "60%", margin: "0 auto"}}>
                    <CardImage
                        className="img-fluid"
                        src={"sadbartender.jpg"}
                        waves
                    />
                    <CardBody className="text-center">
                        <CardTitle>Not in stock</CardTitle>

                        <CardText>
                            Sorry, we've ran out of ingredients! Maybe try something else?
                        </CardText>
                    </CardBody>
                </Card>
            </MDBCol>
        );
    }

}

export default NotInStock;
