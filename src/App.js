import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRoute from './pages/auth';
import Homepage from './pages/public/Homepage/Homepage';
import About from './pages/public/About';
import Dashboard from './pages/public/ArtcileDashboard/Dashboard';
import EditorialBoard from './pages/public/Editorial/Editorial';
import AuthorDash from './pages/public/AuthorDashboard/AuthorDash';
import Reviewdash from './pages/public/ReviewDashboard/Reviewdash';
import Journalinfo from './pages/public/JournalInfo/Journalinfo';
import Submitarticle from './pages/public/SubmitArticle/Submitarticle';
import Archives from './pages/public/Archives/Archive';
import Volume from './pages/public/Archives/Volume';
import Issue from './pages/public/Archives/Issue';
import Articleid from './pages/public/Archives/Articleid/Articleid';
import ArticleDetails from './pages/clientdashboard/ArticleDetails';
import ArticleTable from './pages/clientdashboard/ArticleTable';
import ArticleSubmission from './pages/clientdashboard/ArticleSubmission';
import ProtectedRoute from './context/AuthContext';
import SearchText from './pages/public/Archives/SearchArticle';
import CurrentIssue from './pages/public/CurrentIssue/CurrentIssue';
import ArticlePage from './pages/public/CurrentIssue/articleId/Articlepage';
import SpecialIssue from './pages/public/SpecialIssues';
import FooterPage from './pages/public/footerPages';
import OtherServices from './pages/public/otherServices';
import JournalPage from './pages/public/home1/JournalPage';
import ContactUs from './pages/public/cantactUs';
// app

function App() {
  return (
    <>
      <NotificationContainer />

      <Router>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/about/*" element={<About />} />
          <Route path="/International-Services" element={<OtherServices/>} />
          <Route path="/" element={<JournalPage/>} />
          <Route path="/contact-us" element={<ContactUs/>} />

          <Route path="/journal-information" element={<Journalinfo />} />
          <Route path="/submit-article" element={<Submitarticle />} />
          <Route path="/issue-archive" element={<Archives />} />
          <Route path="/issue-archive/:volume" element={<Volume />} />
          <Route path="/search/:q" element={<SearchText />} />
          <Route path="/:issues" element={<Issue />} />
          <Route path="/a/:article" element={<Articleid />} />
          <Route path="/current-issue" element={<CurrentIssue />} />
          <Route path="/article-details/:article" element={<ArticlePage />} />
          <Route path="/information/article-processing-charges/*" element={<Dashboard />} />
          <Route path="/information/for-authors/*" element={<AuthorDash />} />
          <Route path="/special-issues/*" element={<SpecialIssue />} />
          <Route path="/info/*" element={<FooterPage />} />
          <Route path="/editorial-board-International-Journal-of-Interdisciplinary-Studies-and-System-Science" element={<EditorialBoard />} />
          <Route path="/auth/*" element={<AuthRoute />} />

          <Route element={<ProtectedRoute />} >
            <Route path="/author/articles" element={<ArticleTable />} />
            <Route path="/author/articles/:id" element={<ArticleDetails />} />
            <Route path="/author/article-submission" element={<ArticleSubmission />} />
          </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;
