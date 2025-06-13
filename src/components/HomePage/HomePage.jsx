
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import SEO from "../SEO";

function HomePage() {
  return (
     <>
      <SEO 
        title="Tech Global - Advanced IT Solutions & Software Development"
        description="Transform your business with Tech Global's cutting-edge IT solutions. We specialize in AI bots, custom portfolio websites, UI/UX design, mobile apps, and WordPress development."
        keywords="IT solutions, software development, AI bots, web development, UI/UX design, mobile apps, WordPress development, business automation, portfolio websites"
        url="https://techglobe-solutions.com/"
      />
      <main role="main">
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Banner />
      </main>
    </>
  )
}

export default HomePage