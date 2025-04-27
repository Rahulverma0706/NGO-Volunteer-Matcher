import VolunteerForm from './VolunteerForm.jsx';
import NGOForm from './NGOForm.jsx';
import MatchPage from './MatchPage.jsx';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>NGO Volunteer Matcher</h1>
      <VolunteerForm />
      <NGOForm />
      <MatchPage />
    </div>
  );
}

export default App;
