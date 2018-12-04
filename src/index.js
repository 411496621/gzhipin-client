import React from "react"
import ReactDOM from "react-dom"
import {HashRouter,Route,Switch} from "react-router-dom"
import store from "./redux/store"
import {Provider} from "react-redux"
import Login  from "./container/login"
import Main from "./components/main"
import Register from "./container/register"
import "./assets/less/index.less"

ReactDOM.render((
  <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route  component={Main} />
        </Switch>
      </HashRouter>
  </Provider>
),document.getElementById('app'))
