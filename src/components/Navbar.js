import React from 'react'

import { Outlet } from 'react-router-dom'
// import axios from 'axios'
import './style.css'
import Logo from './images/Logo.png'
import { Link } from 'react-router-dom';


function Navbar() {
  // const navigate = useNavigate()
	// axios.defaults.withCredentials = true;
	// useEffect(()=>{
	// 	axios.get('http://localhost:3000/submit')
	// 	.then(res => {
	// 		if(res.data.Status === "Success") {
	// 			if(res.data.role === "admin") {
	// 				navigate('/');
	// 			} else {
	// 				const id = res.data.id;
	// 				navigate('/employeedetail/'+id)
	// 			}
	// 		} else {
	// 			navigate('/start')
	// 		}
	// 	})
	// }, [])

	// const handleLogout = () => {
	// 	axios.get('http://localhost:3000/login')
	// 	.then(res => {
	// 		navigate('/start')
	// 	}).catch(err => console.log(err));
	// }
    return( 
        <html>

                  {/* navbar start */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto text-center mt-2 navbar-brand">
              {/* Link tag makes page go to another page without reloading
                         <Link to='/Servie'> */}
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Service'>Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Feature">Feature</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Testimonial">Testimonial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FAQ">FAQ</Link>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 row1">
              <li className="ms-3">
                <button className="btn0 ">
                  <Link to="/Login">Login</Link>

                </button>
              </li>
              <li className="ms-3">
                <button className="btn1">
                  <Link to="/Signup">Sign up</Link>

                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
   
      <Outlet />
      
        </html>
        
    );
}

export default Navbar;