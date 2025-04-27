import { useState } from 'react';
import { saveNGO } from './data';

export default function NGOForm() {
  const [ngo, setNGO] = useState({ name: '', location: '', requiredAvailability: '', causeArea: '' });

  const handleChange = (e) => {
    setNGO({ ...ngo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveNGO(ngo);
    alert('NGO Opportunity Posted Successfully!');
    setNGO({ name: '', location: '', requiredAvailability: '', causeArea: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>NGO Opportunity</h2>
      <input name="name" value={ngo.name} placeholder="NGO Name" onChange={handleChange} required />
      <input name="location" value={ngo.location} placeholder="Location" onChange={handleChange} required />
      <input name="requiredAvailability" value={ngo.requiredAvailability} placeholder="Required Days (Weekends, etc.)" onChange={handleChange} required />
      <input name="causeArea" value={ngo.causeArea} placeholder="Cause Area (Education, Environment, etc.)" onChange={handleChange} required />
      <button type="submit">Post Opportunity</button>
    </form>
  );
}
