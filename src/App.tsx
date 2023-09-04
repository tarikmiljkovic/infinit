// import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";

import Text from "./components/Text";

function App() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <Navbar />
      <Home />
      <Pricing />
      <Text />
      <Footer />

      {/* <Testimonials /> */}
    </div>
  );
}

export default App;
