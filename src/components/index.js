import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Education from "./Education";
import Works from "./Works";
import Feedbacks from "./Feedbacks";
import Contact from "./Contact";
import CanvasLoader from "./Loader";
import ErrorBoundary from "./ErrorBoundary";

// NOTE: the *Canvas components are intentionally NOT re-exported here. They pull
// in Three.js; importing them lazily at their point of use keeps Three.js out of
// the initial bundle so the page text paints fast on slow connections.

export {
  Hero,
  Navbar,
  About,
  Tech,
  Education,
  Works,
  Feedbacks,
  Contact,
  CanvasLoader,
  ErrorBoundary,
};
