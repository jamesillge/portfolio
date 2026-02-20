import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./layout/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import InfoPage from "./pages/InfoPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function App() {
  const base = "/~jillge";

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path={`${base}/`} element={<HomePage />} />
            <Route path={`${base}/info`} element={<InfoPage />} />
            <Route path={`${base}/contact`} element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
