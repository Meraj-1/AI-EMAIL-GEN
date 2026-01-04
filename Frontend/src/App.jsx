import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EmailGenerator from "./pages/EmailGenerator";

function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20"> {/* pt-20 to offset fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/email-generator" element={<EmailGenerator/>} />
          <Route path="*" element={<div className="text-center mt-20 text-white">404 - Page Not Found</div>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
