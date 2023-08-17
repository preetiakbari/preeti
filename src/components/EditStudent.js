import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
	const [data, setData] = useState({
		name: '',
		email: '',
		pass: '',
		cpass: '',
	})
	const navigate = useNavigate()

	const { id } = useParams();

	useEffect(() => {
		axios.post('http://localhost:3000/get/' + id)
			.then(res => {
				const studentData = res.data.Result[0];
				setData({
					name: studentData.name,
					rollno: studentData.rollno,
					email: studentData.email,
					department: studentData.department,
					semester: studentData.semester,
					address: studentData.address
				})
			})
			.catch(err => console.log(err));
	}, [id])

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:3000/update/'+ id, data)
			.then(res => {
				if (res.data.Status === "Success") {
					// alert("Deleted Succesfully")
					navigate('/Dashboard/StudentDetails')
					alert("Updated Succesfully")
				}
			})
			.catch(err => console.log(err));
	}
	return (
		<div className='d-flex flex-column align-items-center pt-4'>
			<h2>Update Student</h2>
			<form class="row g-3 w-50" onSubmit={handleSubmit}>
				<div class="col-12">
					<label for="inputName" class="form-label">Name</label>
					<input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({ ...data, name: e.target.value })} value={data.name} required />
				</div>
				<div className="col-12">
					<label for="inputrollno" className="form-label">Enrollment No</label>
					<input type="text" className="form-control" name="rollno" placeholder='Enter Enrollment No' autoComplete='off'
					onChange={e => setData({ ...data, rollno: e.target.value })} value={data.rollno} required />
				</div>
				<div class="col-12">
					<label for="inputEmail4" class="form-label">Email</label>
					<input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
						onChange={e => setData({ ...data, email: e.target.value })} value={data.email} required />
				</div>
				<div className="col-12">
					<label for="inputDepartment" className="form-label">Department</label>
					<select className='form-control' name="department" placeholder='Select your department' autoComplete='off'
					onChange={e => setData({ ...data, department: e.target.value })} value={data.department} required>
						<option>Computer</option>
						<option>Electrical</option>
						<option>Civil</option>
						<option>EC</option>
						<option>Mechnical</option>
					</select>

				</div>
				<div className="col-12">
					<label for="inputsemester" className="form-label">Semester</label>
					<select name="semester" className='form-control' placeholder='Select your semester' autoComplete='off' 
					onChange={e => setData({ ...data, semester: e.target.value })} value={data.semester}required>
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
					onChange={e => setData({ ...data, address: e.target.value })} value={data.address}
					required/>
				</div>

				{/* <div class="col-12">
					<label for="inputpass" class="form-label">pass</label>
					<input type="password" class="form-control" id="inputpass" placeholder="Enter pass" autoComplete='off'
					 onChange={e => setData({ ...data, pass: e.target.value })} value={data.pass} required/>
				</div>
				<div class="col-12">
					<label for="inputcpass" class="form-label">cpass</label>
					<input type="password" class="form-control" id="inputcpass" placeholder="Enter cpass" autoComplete='off'
					onChange={e => setData({ ...data, cpass: e.target.value })} value={data.cpass} required/>
				</div> */}
				<div class="col-12">
					<button type="submit" class="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
	)
}

export default EditStudent