import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AboutPage } from "@/pages/AboutPage";
import { Blog } from "@/pages/Blog";
import { ContactPage } from "@/pages/ContactPage";
import { Home } from "@/pages/Home";
import { Platforms } from "@/pages/Platforms";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen w-screen overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App;
