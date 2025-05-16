// src/App.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, updateAppointment, deleteAppointment } from './appointmentsSlice';

const App = () => {
      console.log(useSelector((state) => state));
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    phone: '',
    doctor: '',
    date: '',
    time: '',
    message: '',
    appointmentType: 'Consult',
  });

  const [editingIndex, setEditingIndex] = useState(-1);

  const handleChange = (e) => {

    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex === -1) {
      dispatch(addAppointment(form));
    } else {
      dispatch(updateAppointment({ index: editingIndex, appointment: form }));
      setEditingIndex(-1);
    }

    setForm({
      name: '',
      email: '',
      age: '',
      phone: '',
      doctor: '',
      date: '',
      time: '',
      message: '',
      appointmentType: 'Consult',
    });
  };

  const handleUpdate = (index) => {
    setForm(appointments[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    dispatch(deleteAppointment(index));
    if (index === editingIndex) {
      setForm({
        name: '',
        email: '',
        age: '',
        phone: '',
        doctor: '',
        date: '',
        time: '',
        message: '',
        appointmentType: 'Consult',
      });
      setEditingIndex(-1);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Appointment Booking</h2>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="Age"
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            placeholder="Doctor's Name"
            className="form-control"
            required
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <select
            name="appointmentType"
            value={form.appointmentType}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="Consult">Consult</option>
            <option value="Revisit">Revisit</option>
          </select>
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            className="form-control"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {editingIndex === -1 ? 'Book Appointment' : 'Update Appointment'}
        </button>
      </form>

      {appointments.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">Appointment List</h4>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{appt.name}</td>
                    <td>{appt.email}</td>
                    <td>{appt.age}</td>
                    <td>{appt.phone}</td>
                    <td>{appt.doctor}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>{appt.appointmentType}</td>
                    <td>{appt.message}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => handleUpdate(index)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
