import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import Footer from './Shared/Footer/Footer';
import AllPlaces from './Pages/AllPlaces/AllPlaces';
import ContactUs from './Shared/ContactUs/ContactUs';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Navigation></Navigation>
     <Switch>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route path='/home'>
         <Home></Home>
       </Route>
       <Route path='/allPlaces'>
         <AllPlaces></AllPlaces>
       </Route>
       <PrivateRoute path='/dashboard'>
         <Dashboard></Dashboard>
       </PrivateRoute>
       <PrivateRoute path='/myOrder'>
         <MyOrder></MyOrder>
       </PrivateRoute>
       <PrivateRoute path='/booking/:id'>
         <Booking></Booking>
       </PrivateRoute>
       <Route path='/contactUs'>
         <ContactUs></ContactUs>
       </Route>
       <Route path='/login'>
         <Login></Login>
       </Route>
       <Route path='/register'>
         <Register></Register>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
