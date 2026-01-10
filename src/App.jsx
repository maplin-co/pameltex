import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import IndividualTherapy from './pages/IndividualTherapy';
import CorporateServices from './pages/CorporateServices';
import OurCompany from './pages/OurCompany';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/individual-therapy" element={<IndividualTherapy />} />
                    <Route path="/corporate-services" element={<CorporateServices />} />
                    <Route path="/our-company" element={<OurCompany />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
