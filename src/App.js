import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem,Table, TableBody, TableHead } from 'mdbreact'

const BasicTable = (props) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                </tr>
            </TableHead>
            <TableBody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </TableBody>
        </Table>
    );
}
class MyListGroup extends Component {
    render(){
      return(
            <ListGroup>
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        );
    }
};
class App extends Component {
  render() {
    return (
        <div className={"container"}>
            <BasicTable/>
            <MyListGroup/>
        </div>

    );
  }
}

export default App;
