import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar, ThemeToggle } from "./components";
import { About, Contact, Home, Projects, CaseStudies, Blog, TechTimeline, CodeSnippets } from "./pages";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <main className='bg-slate-300/20 dark:bg-black transition-colors duration-300'>
        <Router>
          <Navbar />
          <ThemeToggle />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/case-studies' element={<CaseStudies />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/tech-timeline' element={<TechTimeline />} />
                    <Route path='/code-snippets' element={<CodeSnippets />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </main>
    </ThemeProvider>
  );
};

export default App;
