
import './App.css';
import LandingPage from './components/LandingPage';
import FitnessGoalsSection from './components/FitnessGoalsSection';
import FitnessPrograms from './components/FitnessPrograms';
import FitnessServices from './components/FitnessServices';
import PricingPlans from './components/PricingPlans';
import ClientTestimonials from './components/ClientTestimonials';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <LandingPage/>
      <FitnessGoalsSection/>
      <FitnessPrograms/>
      <FitnessServices/>
      <PricingPlans/>
      <ClientTestimonials/>
      <Footer/>
    </>
  )
}

export default App
