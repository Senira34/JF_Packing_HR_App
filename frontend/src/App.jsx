import React, { useState } from 'react';
import Loginsignup from './pages/Loginsignup';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import JobDetail from './components/JobDetails';
import SupportPartnerView from './components/SupportPartnerView';
import Jobs from './pages/Jobs';
import AboutUs from './pages/AboutUs';
import TimeSheet from './pages/TimeSheet';
import ApplyLeave from './pages/ApplyLeave';
import FormTemplateView from './components/FormTemplateView';
import HelpDeskView from './components/HelpDeskView';
import { departments, jobs, forms, helpDeskCategories } from './data/mockData';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedForm, setSelectedForm] = useState(null);
  const [selectedHelpDeskCategory, setSelectedHelpDeskCategory] = useState(null);

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
        setSelectedForm={setSelectedForm}
        setSelectedHelpDeskCategory={setSelectedHelpDeskCategory}
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
        {currentPage === 'aboutus' && (
          <AboutUs />
        )}
        {currentPage === 'timesheet' && (
          <TimeSheet />
        )}
        {currentPage === 'apply-leave' && (
          <ApplyLeave />
        )}
        {currentPage === 'form-template' && (
          <FormTemplateView
            formName={selectedForm}
            onBack={() => setCurrentPage('home')}
          />
        )}
        {currentPage === 'help-desk' && (
          <HelpDeskView
            category={selectedHelpDeskCategory}
            onBack={() => setCurrentPage('home')}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;