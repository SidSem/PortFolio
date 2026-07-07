import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Education, Hero, Navbar, Tech, Works } from "./components";

// Code-split the star background so Three.js is not part of the critical bundle.
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
