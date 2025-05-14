import React from 'react';

function AppointmentTable() {
  const data = [
    { name: 'John Doe', age: 28, gender: 'Male', status: 'Consult', time: '06:00 PM', date: '2 Feb 2021', phone: '+91 9876543215', doctor: 'Dr. Ananth' },
    { name: 'Mukul Rao', age: 28, gender: 'Male', status: 'Revisit', time: '06:00 PM', date: '2 Feb 2021', phone: '+91 9876543215', doctor: 'Dr. Ananth' },
    { name: 'Neeraj Sharma', age: 28, gender: 'Male', status: 'Consult', time: '06:00 PM', date: '2 Feb 2021', phone: '+91 9876543215', doctor: 'Dr. Ananth' }
  ];

  return (
    <div className="container">
      <br /><br />
      <table className="table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Status</th>
            <th>Appointment</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="user-info">
                  <div className="user-info__img">
                    <img src="img/prof.png" alt="User Img" />
                  </div>
                  <div className="user-info__basic">
                    <h5 className="mb-0">{item.name}</h5>
                    <p className="text-muted mb-0">{item.age} yrs, {item.gender}</p>
                  </div>
                </div>
              </td>
              <td>
                <span className={`btn ${item.status === 'Consult' ? 'btn-success' : 'btn-primary'}`}>{item.status}</span>
              </td>
              <td>
                <h6 className="mb-0">{item.time}</h6>
                <small>{item.date}</small>
              </td>
              <td>
                <h6 className="mb-0">{item.phone}</h6>
                <a href="#!"><small>Contact</small></a>
              </td>
              <td>
                <h6 className="mb-0">{item.doctor}</h6>
              </td>
              <td>
                <div className="dropdown open">
                  <a href="#!" className="px-2" data-toggle="dropdown">
                    <i className="fa fa-ellipsis-v"></i>
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="#"><i className="fa fa-pencil mr-1"></i> Edit</a>
                    <a className="dropdown-item text-danger" href="#"><i className="fa fa-trash mr-1"></i> Delete</a>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;
