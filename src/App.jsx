import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <FadeIn><About /></FadeIn>
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <FadeIn><Projects /></FadeIn>
        <FadeIn><Certificates /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
      <Footer />
    </div>
  )
}

export default App
