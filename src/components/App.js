import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import React from 'react';


import Home from './Home';
import Details from './Details';
import Login from './Login';
import Signup from './Signup';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/drink/:id" component={Details} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={Signup} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
