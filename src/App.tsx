import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, TrendingUp, Users, Target, Award } from 'lucide-react';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import NewsletterPage from './components/NewsletterPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/free-marketing-analysis" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;