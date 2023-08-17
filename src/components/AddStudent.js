// import axios from 'axios';
import React from 'react'
import './style.css'
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function AddStudent() {
	// const [data, setData] = useState({
	// 	name: '',
	// 	email: '',
	// 	password: '',
	// 	address: '',
	// 	salary: '',
	// 	image: ''
	// })
	// const navigate = useNavigate()

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	const formdata = new FormData();
	// 	formdata.append("name", data.name);
	// 	formdata.append("email", data.email);
	// 	formdata.append("password", data.password);
	// 	formdata.append("address", data.address);
	// 	formdata.append("salary", data.salary);
	// 	formdata.append("image", data.image);
	// 	axios.post('http://localhost:8081/create', formdata)
	// 	.then(res => {
	// 		navigate('/employee')
	// 	})
	// 	.catch(err => console.log(err));

	// }
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Add Student</h2>
			<form className="row g-3 w-50" action="http://localhost:3000/AddStudent" method="post">
				<div className="col-12">
					<label for="inputName" className="form-label">Name</label>
					<input type="text" className="form-control" name="name" placeholder='Enter Name' autoComplete='off'
						required />
				</div>
				<div className="col-12">
					<label for="inputrollno" className="form-label">Enrollment No</label>
					<input type="text" className="form-control" name="rollno" placeholder='Enter EnrollmentNo' autoComplete='off'
						required />
				</div>
				<div className="col-12">
					<label for="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" name="email" placeholder='Enter Email' autoComplete='off'
						required />
				</div>
				<div className="col-12">
					<label for="inputDepartment" className="form-label">Department</label>
					<select className='form-control' name="department" placeholder='Select your department' autoComplete='off' required>
						<option>Computer</option>
						<option>Electrical</option>
						<option>Civil</option>
						<option>EC</option>
						<option>Mechnical</option>
					</select>

				</div>
				<div className="col-12">
					<label for="inputsemester" className="form-label">Semester</label>
					<select name="semester" className='form-control' placeholder='Select your semester' autoComplete='off' required>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
						<option>7</option>
						<option>8</option>
					</select>

				</div>
				<div className="col-12">
					<label for="inputAddress" className="form-label">Address</label>
					<input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" autoComplete='off'
					/>
				</div>
				<div className="col-12">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" name="pass" placeholder='Enter Password'
						required />
				</div>
				<div className="col-12">
					<label for="inputSalary" className="form-label">Confirm Password</label>
					<input type="password" className="form-control" name="cpass" placeholder="Enter confirm pass" autoComplete='off'
						required />
				</div>

				{/* <div className="col-12 mb-3">
					<label className="form-label" for="inputGroupFile01">Select Image</label>
					<input type="file" className="form-control" id="inputGroupFile01"
					/>
				</div> */}
				<div className="col-12">
					<input type="submit" className="btn btn-primary" name="submit" value="Add Student" />

				</div>
			</form>
		</div>

	)
}

export default AddStudent