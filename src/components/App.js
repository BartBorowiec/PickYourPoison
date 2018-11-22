import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import React from 'react';


import Home from './Home';
import Details from './Details';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/:id" component={Details} />
                        <Route exact path="/" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
