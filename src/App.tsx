import { ThemeProvider } from './contexts/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar.tsx';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { StyleBrand } from './components/sections/StyleBrand';
import { Blog } from './components/sections/BlogPreview.tsx';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer.tsx';
import FloatingCardsCarousel from './components/common/FloatingCardsCarousel/FloatingCardsCarousel.tsx';
import { sampleCards } from './components/common/FloatingCardsCarousel/data/sampleCards.tsx';
import { RestaurantsServices } from './pages/services/RestaurantsServices.tsx';
import { Services } from './components/sections/Services.tsx';
import { OnlineStoresServices } from './pages/services/OnlineStoresServices.tsx';
import { MedicalCentersServices } from './pages/services/MedicalCentersServices.tsx';
import { WebBrandDesignServices } from './pages/services/WebBrandDesignServices.tsx';
import { PersonalBrandServices } from './pages/services/PersonalBrandServices.tsx';
import { WeddingServices } from './pages/services/WeddingServices.tsx';
import { LandingPagesServices } from './pages/services/LandingPagesServices.tsx';

function App() {
  // const { width } = useWindowSize();

  // Calculate responsive dimensions
  // const getResponsiveDimensions = () => {
  //   if (width < 375) { // Very small mobile devices (iPhone SE, small Android)
  //     return {
  //       radius: 100,
  //       cardWidth: 140,
  //       cardHeight: 220,
  //       rotationSpeed: 10
  //     };
  //   } else if (width < 640) { // Standard mobile devices
  //     return {
  //       radius: 130,
  //       cardWidth: 300,
  //       cardHeight: 250,
  //       rotationSpeed: 12
  //     };
  //   } else if (width < 1024) { // Tablet
  //     return {
  //       radius: 280,
  //       cardWidth: 240,
  //       cardHeight: 320,
  //       rotationSpeed: 15
  //     };
  //   } else { // Desktop
  //     return {
  //       radius: 400,
  //       cardWidth: 280,
  //       cardHeight: 380,
  //       rotationSpeed: 18
  //     };
  //   }
  // };

  // const { radius, cardWidth, cardHeight, rotationSpeed } = getResponsiveDimensions();
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-navy-950 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-300">
        <Navbar />
        <Routes>
          {/* Página principal */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <FloatingCardsCarousel
                cards={sampleCards}
                autoRotate={true}
                // rotationSpeed={rotationSpeed}
                // radius={radius}
                // cardWidth={cardWidth}
                // cardHeight={cardHeight}
              // className="mb-8 sm:mb-12 md:mb-20"
              />
              <Projects />
              <StyleBrand />
              {/* <Blog /> */}
              <Contact />
            </>
          } />
          {/* Página principal de servicios */}
          <Route path="/services" element={<Services />} />
          {/* Páginas detalladas de servicios */}
          <Route path="/services/restaurants" element={<RestaurantsServices />} />
          <Route path="/services/stores" element={<OnlineStoresServices />} />
          <Route path="/services/medical" element={<MedicalCentersServices />} />
          <Route path="/services/personal-brand" element={<PersonalBrandServices />} />
          <Route path="/services/web-brand" element={<WebBrandDesignServices />} />
          <Route path="/services/wedding" element={<WeddingServices/>} />
          <Route path="/services/landing" element={<LandingPagesServices/>} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;