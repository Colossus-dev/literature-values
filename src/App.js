// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LiteratureList from './pages/LiteratureList';
import LiteratureDetail from './pages/LiteratureDetail';
import ValueReflection from './pages/ValueReflection';
import DiscussionPage from './pages/DiscussionPage';
import TeacherCorner from './pages/TeacherCorner';
import NotFound from './pages/NotFound';
import './styles/global.css';
import './styles/fonts.css';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-lime-200">
                <Navbar/>
                <main className="flex-grow container mx-auto px-4 py-6">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/literature" element={<LiteratureList />} />
                        <Route path="/literature/:slug" element={<LiteratureDetail />} />
                        <Route path="/values" element={<ValueReflection />} />
                        <Route path="/discussion" element={<DiscussionPage />} />
                        <Route path="/teacher" element={<TeacherCorner />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
