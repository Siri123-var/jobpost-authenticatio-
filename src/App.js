import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './components/signup'; // Adjust the path if necessary
import SignupPage2 from './components/signup2';
import InterviewPage from './components/interview'; // Import InterviewPage component
import SchedulePage from './components/schedule'; 
import ProtectedPage from './components/protectedpage'; // Import SchedulePage component


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignupPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/signup2" element={<SignupPage2/>} />
        <Route path="/interview" element={<InterviewPage />} /> {/* Add route for InterviewPage */}
        <Route path="/schedule" element={<SchedulePage />} /> {/* Add route for SchedulePage */}
        <Route path="/protectedpage" element={<ProtectedPage />} />
      </Routes>
    </Router>
  );
}

export default App;