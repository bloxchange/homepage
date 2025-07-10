import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Traze from './pages/Traze';
import TrazeDocument from './pages/TrazeDocument';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Box minH="100vh" display="flex" flexDirection="column">
        <Navigation />
        <Box flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/traze" element={<Traze />} />
            <Route path="/traze-docs" element={<TrazeDocument />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
