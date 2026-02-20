import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import InfoPage from "./pages/InfoPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
