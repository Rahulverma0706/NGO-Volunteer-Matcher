export function saveVolunteer(volunteer) {
    const volunteers = JSON.parse(localStorage.getItem('volunteers') || '[]');
    volunteers.push(volunteer);
    localStorage.setItem('volunteers', JSON.stringify(volunteers));
  }
  
  export function saveNGO(ngo) {
    const ngos = JSON.parse(localStorage.getItem('ngos') || '[]');
    ngos.push(ngo);
    localStorage.setItem('ngos', JSON.stringify(ngos));
  }
  
  export function getVolunteers() {
    return JSON.parse(localStorage.getItem('volunteers') || '[]');
  }
  
  export function getNGOs() {
    return JSON.parse(localStorage.getItem('ngos') || '[]');
  }
  