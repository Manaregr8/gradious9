import React from 'react';

function AppointmentForm() {
  return (
    <div className="container register-form">
      <div className="form">
        <div className="note">
          <p>Welcome to Gradious Doctor Appointment Booking</p>
        </div>
        <div className="form-content">
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Patient Name *" />
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Age *" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Phone Number *" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Date *" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Time *" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Doctor Name *" />
              </div>
              <div className="form-group">
                <select className="form-control">
                  <option>Consult</option>
                  <option>Revisit</option>
                </select>
              </div>
            </div>
          </div>
          <button type="button" className="btnSubmit">Book Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentForm;
