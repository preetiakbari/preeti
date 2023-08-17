
    import './style.css';
    import { Link } from 'react-router-dom';
    import Logo from './images/Logo.png'

    function Login() {
        return( 
            
                <html>

                    {/* <!-- Navbar section --> */}
                    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3" >
                        <div className="container">
                            <Link className="navbar-brand " to='/Home'>
                                <img src={Logo} alt=""/>
                            </Link>         
                        </div>
                    </nav>

                    <section className="form-container my-5">

                        <form action="http://localhost:3000/login" method="post">

                            <div className="row mb-3">
                                <h3>login now</h3>
                            </div>

                            <div className="row mb-3">
                                <h4>Enter Your Email :</h4>
                                <input type="email" name="email" className="box" placeholder="enter your email" required />

                            </div>

                            <div className="row mb-3">
                                <h4>Enter Your Password :</h4>
                                <input type="password" name="pass" className="box" placeholder="enter your password" required />
                            </div>

                            <input type="submit" className="btn mb-3 btn6" name="submit" value="Login Now" />
                            <p>
                                Don't have an account? <Link to='/Signup'>Sign up</Link>  <br/>
                                <Link to="/Update">Forgot password? </Link> 
                            </p>
                            <p><Link to="/Delete">Want to delete your account? </Link></p>

                        </form>

                    </section>
                </html>
            
        );
    }

    export default Login;