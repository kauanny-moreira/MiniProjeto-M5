import Menu from "./components/Menu/Menu.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Sobre from "./components/Sobre/Sobre.jsx";
import Projetos from './components/Projetos/Projetos.jsx';

// arquivo principal
export default function App(){
  return(
    <div>
      <Menu />
      <Hero />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  )
}