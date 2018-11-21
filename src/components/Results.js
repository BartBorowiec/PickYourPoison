import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, MDBCol, CardText } from 'mdbreact';

class DrinkCard extends React.Component {
    render() {
        return (
            <MDBCol  size="4">
                <Card className={"mt-3 mb-3"} style={{ width: "22rem" }}>
                    <CardImage
                        className="img-fluid"
                        src={this.props.img}
                        waves
                    />
                    <CardBody className="text-center">
                        <CardTitle>{this.props.title}</CardTitle>

                        <Button href={`/${this.props.id}`}>Recipe</Button>
                    </CardBody>
                </Card>
            </MDBCol>
        )
    }
}
class DrinksList extends React.Component {

    render() {
        if (!this.props.drinks){
            return (
                <MDBCol  size="4">
                    <Card className={"mt-3 mb-3"} style={{ width: "22rem" }}>
                        <CardImage
                            className="img-fluid"
                            src={"https://img.brainjet.com/quill/6/3/e/8/9/0/63e89055e322daa29f1a8d3d2d134f4621d0a354.jpg"}
                            waves
                        />
                        <CardBody className="text-center">
                            <CardTitle>Not in stock</CardTitle>

                            <CardText>
                                Sorry, we've ran out of ingredients, maybe try something else?
                            </CardText>
                        </CardBody>
                    </Card>
                </MDBCol>
            )
        }

        return(
            <>
                {this.props.drinks.map((drink,i) => {
                    return <DrinkCard key={i} title={drink.strDrink} id={drink.idDrink} img={drink.strDrinkThumb}/>
                })}
            </>
        )
    }
}

class Results extends React.Component {
    render(){
        return <DrinksList drinks={this.props.drinks}/>;
    }

}

export default Results;