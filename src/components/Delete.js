
import './style.css';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png'

function Delete() {
    return (

        <html>

            {/* <!-- Navbar section --> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3" >
                <div className="container">
                    <Link className="navbar-brand " to='/Home'>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
            </nav>

            <section className="form-container">

                <form action="http://localhost:3000/delete" method="post">

                    <div className="row mb-3">
                        <h3>Delete </h3>
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Email :</h4>
                        <input type="email" name="email" className="box" placeholder="enter your email" required />

                    </div>

                        {/* <!-- <div className="row mb-3">
                            <h4>Enter new Your Password :</h4>
                            <input type="password" name="pass" className="box" placeholder="enter your password" required>
                        </div>
                        <div className="row mb-3">
                            <h4>Enter Confirm Your Password :</h4>
                            <input type="password" name="cpass" className="box" placeholder="enter your password" required>
                        </div> --> */}

                    <input type="submit" className="btn mb-3 btn6" name="submit" value="Delete" />
                    <p><Link to='/Signup'>Sign up</Link></p>




                </form>

            </section>



        </html>

    );
}

export default Delete;