import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Traze from './pages/Traze';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Box minH="100vh">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/traze" element={<Traze />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
