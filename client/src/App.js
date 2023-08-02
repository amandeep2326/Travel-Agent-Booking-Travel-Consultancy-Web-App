import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import {createBrowserRouter,createRoutesFromElements,Route,Outlet,RouterProvider} from 'react-router-dom'
import BookingScreen from './screens/BookingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element = {<Root/>}>
        <Route path = "/home" element = {<Homescreen/>}></Route>
        <Route path = '/book/:agentid' element = {<BookingScreen/>}/>
        <Route path = '/register' element = {<RegisterScreen/>}/>
        <Route path = '/login' element = {<LoginScreen/>}/>
      </Route>
    )
  )
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}
const Root = () =>{
  return <> <Navbar/> <Outlet/></>
}
export default App;
