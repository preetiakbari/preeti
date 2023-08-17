// Employee.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css'


function StudentDetails() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/getStudent')
      .then(res => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
        } else {
          alert("Error")
        }
      })
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {

    const Confirm = window.confirm("Are you sure you want to delete this student?");
    if (Confirm === true) {
      axios.post('http://localhost:3000/delete/' + id)
        .then(res => {

          if (res.data.Status === "Success") {
            // Refresh the page after successful deletion
            window.location.reload(true);
            alert("Deleted Successfully");
          } else {
            alert("Error");
          }
        })
        .catch(err => console.log(err));
    }
  }
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/Dashboard/Student')
  //     .then(res => {
  //       if (res.data.Status === 'Success') {
  //         setData(res.data.Result);
  //       } else {
  //         alert('Error');
  //       }
  //     })
  //     .catch(err => {
  //       console.log('Error fetching Student data:', err);
  //       alert('An error occurred while fetching Student data.');
  //     });
  // }, [])
  // console.log(data);


  return (

    <div className='container px-5 py-3'>

      <div className='d-flex justify-content-center mt-2'>
        <h3>Student List</h3>
      </div>

      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">
          <thead className='table-light'>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>EnrollmentNo</th>
              <th>Email</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Address</th>
              {/* <th>Password</th> */}
              {/* <th>Confirm Password</th> */}
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.rollno}</td>
                <td>{item.email}</td>
                <td>{item.department}</td>
                <td>{item.semester}</td>
                <td>{item.address}</td>
                {/* <td>{item.pass}</td> */}
                {/* <td>{item.cpass}</td> */}
                <td>
                  <Link to={`/Dashboard/EditStudent/${item._id}`} className='btn btn-primary me-2' >Edit</Link>
                  {/* <button onClick={e => handleDelete(item.id)} className='btn btn-sm btn-danger'>delete</button> */}
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentDetails
