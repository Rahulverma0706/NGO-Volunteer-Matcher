import { useEffect, useState } from 'react';
import { getVolunteers, getNGOs } from './data';

export default function MatchPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const volunteers = getVolunteers();
    const ngos = getNGOs();
    const allMatches = [];

    volunteers.forEach(volunteer => {
      ngos.forEach(ngo => {
        if (
          ngo.location.toLowerCase() === volunteer.location.toLowerCase() &&
          ngo.causeArea.toLowerCase().includes(volunteer.interests.toLowerCase())
        ) {
          allMatches.push({ volunteer, ngo });
        }
      });
    });

    setMatches(allMatches);
  }, []);

  return (
    <div>
      <h2>Matched Opportunities</h2>
      {matches.length ? (
        matches.map((match, index) => (
          <div key={index} className="card">
            <h3>Volunteer: {match.volunteer.name}</h3>
            <p><strong>Interested In:</strong> {match.volunteer.interests}</p>
            <h4>NGO: {match.ngo.name}</h4>
            <p><strong>Location:</strong> {match.ngo.location}</p>
            <p><strong>Cause:</strong> {match.ngo.causeArea}</p>
            <p><strong>Required Days:</strong> {match.ngo.requiredAvailability}</p>
          </div>
        ))
      ) : (
        <p>No matching opportunities yet!</p>
      )}
    </div>
  );
}
