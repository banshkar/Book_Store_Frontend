
import Home from './pages/home/Home';

import SignUp from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import CardItem from './pages/Book/CardItem';
import Order from './pages/order/Order'
import PlaceOrder from './component/orderplace/PlaceOrder';
function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route exact  path="/signup" element={<SignUp />}/>
          <Route exact  path="/login" element={<Login/>} />
          <Route exact path="/order" element={<Order/>}/>
          <Route exact  path="/book" element={<CardItem/>}/>
          <Route exact  path="/" element={<CardItem/>}/>
          <Route exact  path="/placeorder" element={<PlaceOrder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
