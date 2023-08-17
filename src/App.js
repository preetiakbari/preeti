// import logo from './flag.png';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Service from './components/Service';
import Feature from './components/Feature';
import Product from './components/Product';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Signup from './components/Signup';
import Delete from './components/Delete';
import Update from './components/Update';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard'
// import DashHome from './components/DashHome';
// import Student from './components/Student'
import DashProfile from './components/DashProfile';
// import Profile from './components/Profile'
import AddStudent from './components/AddStudent'
import EditStudent from './components/EditStudent'
import StudentDetails from './components/StudentDetails';
// import Start from './components/Start'


// import Logo from './components/images'
// import { Link } from 'react-router-dom';



function App() {
  return (

    <Router>


      <Routes>
        <Route exact path='/' element={<Navbar />} >
          <Route exact path='' element={<Home />} />
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/Feature' element={<Feature />} />
          <Route exact path='/Product' element={<Product />} />
          <Route exact path='/Testimonial' element={<Testimonial />} />
          <Route exact path='/FAQ' element={<FAQ />} />
        </Route>

        <Route exact path='/Dashboard' element={<Dashboard />}>
          {/* <Route exact path='DashHome' element={<DashHome />}/> */}
          {/* <Route exact path='' element={<DashHome />}/> */}
          <Route exact path='' element={<StudentDetails />}/>
          <Route exact path='StudentDetails' element={<StudentDetails />}/>
          <Route exact path='DashProfile' element={<DashProfile />}/>
          <Route exact path='AddStudent' element={<AddStudent/>}/>
          <Route exact path='EditStudent/:id' element={<EditStudent/>}/>
        </Route>

        

          {/* 
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
        <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route> */}

        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/Signup' element={<Signup />} />
        <Route exact path='/Delete' element={<Delete />} />
        <Route exact path='/Update' element={<Update />} />

        {/* <Route exact path='/Navbar' element={<Navbar />} /> */}
        {/* <Route exact path='/' element={<Home />} />
        

          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/Service' element={<Service />} />
          <Route exact path='/Feature' element={<Feature />} />
          <Route exact path='/Product' element={<Product />} />
          <Route exact path='/Testimonial' element={<Testimonial />} />
          <Route exact path='/FAQ' element={<FAQ />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup />} />
          <Route exact path='/Delete' element={<Delete />} />
          <Route exact path='/Update' element={<Update />} /> */}




      </Routes>
    </Router>



  );

}

export default App;
