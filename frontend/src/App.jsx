import React, { useState } from 'react';
import Loginsignup from './pages/Loginsignup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import JobDetail from './components/JobDetails';
import SupportPartnerView from './components/SupportPartnerView';
import Jobs from './pages/Jobs';
import { departments, jobs, forms, helpDeskCategories } from './data/mockData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setCurrentPage('job-detail');
  };

  // Scroll to top whenever currentPage changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Main App Render
  if (!isLoggedIn) {
    return <Loginsignup setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        setIsLoggedIn={setIsLoggedIn}
        setCurrentPage={setCurrentPage}
        setSelectedJob={setSelectedJob}
        departments={departments}
        jobs={jobs}
        forms={forms}
        helpDeskCategories={helpDeskCategories}
      />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <Home
            onJobClick={handleJobClick}
            onViewAllJobs={() => setCurrentPage('jobs')}
          />
        )}
        {currentPage === 'jobs' && (
          <Jobs
            onJobClick={handleJobClick}
            onBack={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'job-detail' && (
          <JobDetail
            selectedJob={selectedJob}
            onBack={() => {
              setCurrentPage('home');
              setSelectedJob(null);
            }}
          />
        )}
        {currentPage === 'support-partners' && (
          <SupportPartnerView
            onBack={() => setCurrentPage('home')}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;