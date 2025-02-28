import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navtab from './Navtab';
import { Context } from './Context';
import Hero from './Hero';
import Features from './Features';
import Recipe from './Recipe';
import Chefs from './Chefs';
import Gallery from './Gallery';
import Email from './Email';
import Footer from './Footer';
import CopyRight from './CopyRight';

function App() {
  const navbar = ['Home', 'about us', 'recipe', 'Gallery', '+1(909) 235-9814', 'sign in', 'sign up']

  return (
    <>
      <Context.Provider value={navbar}>
        <Navtab />
        <Hero />
        <Features />
        <Recipe />
        <Chefs />
        <Gallery />
        <Email />
        <Footer />
        <CopyRight />
      </Context.Provider>
    </>
  )
}
export default App
