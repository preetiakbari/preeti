
import './style.css';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Signup() {

    const navigate = useNavigate()

    const handleSubmit = (event) => {
		event.preventDefault();
        const name = event.target.name.value;
        const rollno = event.target.rollno.value;
        const email = event.target.email.value;
        const department = event.target.department.value;
        const semester = event.target.semester.value;
        const address = event.target.address.value;
        const pass = event.target.pass.value;
        const cpass = event.target.cpass.value;

        // Check if passwords match
        if (pass !== cpass) {
            alert("Both Passwords do not match");
            return;
        }
		axios.post('http://localhost:3000/submit-form',  { name, rollno, email, department, semester, address, pass, cpass })
		.then(res => {
            if (res.data.Status === "Error") {
                alert("Both Passwords do not match");
            } else if (res.data.Status === "Success") {
                navigate('/Login');
            }
		})
		.catch(err => console.log(err));
	}

    


    return (

        <html>

            {/* <!-- Navbar section --> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top py-3" >
                <div className="container">
                    {/* <Link className="navbar-brand " to='/'> */}
                        <img src={Logo} alt="" />
                    {/* </Link> */}
                </div>
            </nav>

            <section className="form-container my-5 py-5">

                <form onSubmit={handleSubmit}>

                    <div className="row mb-3">
                        <h3>register now</h3>
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your UserName :</h4>
                        <input type="text" name="name" className="box" placeholder="enter your username" required />
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your EnrollmentNo :</h4>
                        <input type="text" name="rollno" className="box" placeholder="enter your enrollmentno" required />
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Email :</h4>
                        <input type="email" name="email" className="box" placeholder="enter your email" required />
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Department :</h4>
                        <select name="department" className='box' placeholder='Select your department' required>
                            <option>Computer</option>
                            <option>Electrical</option>
                            <option>Civil</option>
                            <option>EC</option>
                            <option>Mechnical</option>
                        </select>
                        {/* <input type="email" name="email" className="box" placeholder="enter your email" required /> */}
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Semester :</h4>
                        <select name="semester" className='box' placeholder='Select your semester' required>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                        {/* <input type="email" name="email" className="box" placeholder="enter your email" required /> */}
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Address :</h4>
                        <input type="text" name="address" className="box" placeholder="enter your adreess" required />
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Password :</h4>
                        <input type="password" name="pass" className="box" placeholder="enter your password" required />
                    </div>

                    <div className="row mb-3">
                        <h4>Enter Your Confirm Password :</h4>
                        <input type="password" name="cpass" className="box" placeholder="confirm your password" required />
                    </div>

                    <input type="submit" className="btn mb-3 btn6" name="submit" value="Sign up now" />
                    <p>Already have an account? <Link to='/Login'>Login now</Link></p>

                </form>

            </section>


        </html>

    );
}

export default Signup;