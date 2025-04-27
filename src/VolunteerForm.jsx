import { useState } from 'react';
import { saveVolunteer } from './data';

export default function VolunteerForm() {
  const [volunteer, setVolunteer] = useState({ name: '', location: '', availability: '', interests: '' });

  const handleChange = (e) => {
    setVolunteer({ ...volunteer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveVolunteer(volunteer);
    alert('Volunteer Registered Successfully!');
    setVolunteer({ name: '', location: '', availability: '', interests: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Volunteer Registration</h2>
      <input name="name" value={volunteer.name} placeholder="Name" onChange={handleChange} required />
      <input name="location" value={volunteer.location} placeholder="Location" onChange={handleChange} required />
      <input name="availability" value={volunteer.availability} placeholder="Availability (Weekends, Evenings)" onChange={handleChange} required />
      <input name="interests" value={volunteer.interests} placeholder="Interests (Education, Healthcare, etc.)" onChange={handleChange} required />
      <button type="submit">Register</button>
    </form>
  );
}
