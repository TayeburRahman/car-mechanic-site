import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./component/AuthProvider/AuthProvider";
import Booking from "./component/Booking/Booking";
import Footer from "./component/Footer/Footer";
import NotFound from "./component/NotFound/NotFound";
import Register from "./component/Register/Register";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login";
import Header from "./Pages/Shared/Header";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:surviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
