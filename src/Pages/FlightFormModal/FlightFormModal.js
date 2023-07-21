import React, { useState } from 'react';
import Modal from 'react-modal';
import './FlightFormModal.css'

const FlightFormModal = ({ isOpen, onClose ,onSubmit}) => {
  const [formData, setFormData] = useState({
    source: 'Mumbai',
    destination: 'Chennai',
    departureDate: '23-07-2023',
    departureTime: '11:05',
    arrivalDate: '23-07-2023',
    arrivalTime: '13:05',
    seats: 59,
    fare: 500,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can perform any action with the form data, such as sending it to the server using Axios
    console.log('Form data:', formData);
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">Flight Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">

          <label className="form-label">Flight Name:
          <input
            type="text"
            name="flightName"
            value={formData.flightName}
            onChange={handleChange}
            className="form-input"
          />
          </label>
            <label className="form-label">Source:
            <input
              type="text"
              name="flightOrigin"
              value={formData.flightOrigin}
              onChange={handleChange}
              className="form-input"
            />
            </label>
            <label className="form-label">Destination
            <input
            type="text"
            name="flightDestination"
            value={formData.flightDestination}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            <label className="form-label">Flight Fare
            <input
            type="number"
            name="flightFare"
            value={formData.flightFare}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            <label className="form-label"> Departure Date
            <input
            type="text"
            name="flightStartDate"
            value={formData.flightStartDate}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            <label className="form-label">Arrival Date
            <input
            type="text"
            name="flightEndDate"
            value={formData.flightEndDate}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            <label className="form-label"> Departure Time
            <input
            type="text"
            name="flightStartTime"
            value={formData.flightStartTime}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            <label className="form-label"> Arrival Time
            <input
            type="text"
            name="flightEndTime"
            value={formData.flightEndTime}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            <label className="form-label"> No. Of seats
            <input
            type="number"
            name="noofseats"
            value={formData.noofseats}
            onChange={handleChange}
            className="form-input"
            />
            </label>
            
          </div>
          
          <div className="form-button-container">
            <button type="submit" className="form-button">
              Submit
            </button>
            <button type="button" onClick={onClose} className="form-button">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default FlightFormModal;
