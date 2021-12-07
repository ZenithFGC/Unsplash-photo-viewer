import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import UnsplashPhotos from "../components/unsplashPhotos";
import PageNotFound from '../components/404.js';
import ViewPhoto from "../components/viewPhoto";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.previousLocation = this.props.location;
    }
    
    componentDidUpdate(prevProps) {
        const { location } = this.props;
        if (
            prevProps.history.action !== 'POP' &&
            (!location.state || !location.state.modal)
          ) {
            this.previousLocation = this.props.location
          };
    };
    render() {
        const { location } = this.props;
        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        )
        console.warn(isModal);
        return (
            <>
            <Switch location={isModal ? this.previousLocation : location}>
                <Route path="/home" component= { UnsplashPhotos } />
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/404" component={ PageNotFound } />
                <Route path="*" component={PageNotFound} />
            </Switch>

            {isModal ? <Route path="/photos/:id" component={ ViewPhoto } /> : null}
            </>
        )
    }
}

export default withRouter(App)