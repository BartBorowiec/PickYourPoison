import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, MDBCol, CardText } from 'mdbreact';

class DrinkCard extends React.Component {
    render() {
        return (
            <MDBCol  size="4">
                <Card className={"mt-3 mb-3"}>
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
                <MDBCol  size="12">
                    <Card className={"mt-3 mb-3"} style={{ width: "60%", margin: "0 auto" }}>
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