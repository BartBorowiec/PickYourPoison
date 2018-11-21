import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import React from 'react';


import Home from './Home';
import Details from './Details';
import NotFound from './NotFound';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/:id" component={Details} />
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
