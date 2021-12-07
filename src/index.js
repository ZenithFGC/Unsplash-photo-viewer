import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import mainReducer from "./redux/reducers/index";
import App from "./containers/app.js";
import {unsplash, authenticationUrl} from "./api/unsplashAPI";
import thunk from 'redux-thunk';
import "../src/styles/index.css"

const code = window.location.search.split('code=')[1];

let initialState = [];
const store = createStore(mainReducer, applyMiddleware(thunk)
  );

if (code) {
    unsplash.auth.userAuthentication(code)
        .then(res => res.json())
        .then(json => {
            localStorage.setItem('token', json.access_token);
            unsplash.auth.setBearerToken(json.access_token);
        }).then( window.history.pushState(null, null, '/'))
        .then(
            ReactDOM.render(
                <React.StrictMode>
                    <BrowserRouter>
                        <Provider store={store}>
                            <App />
                        </Provider>
                    </BrowserRouter>
                </React.StrictMode>,
                document.querySelector('.app')
            )
        );
} else {
    window.location.assign(authenticationUrl);
}
