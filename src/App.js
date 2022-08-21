// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';

import Courosal from './components/Courosal/Courosal';
import { NewsMarquee } from './components/NewsMarquee/NewsMarquee';
import { CardContainer } from './components/AdvantageCardContainer/CardContainer';
import { Focus } from './components/FocusSector/Focus';
import { Process } from './components/Processes/Process';
import { Invest } from './components/InvestProject/Invest';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <div className='container'></div> */}
      <Header/>
      <Courosal/>
      <NewsMarquee />
      <CardContainer/>
      <Focus/>
      <Process/>
      <Invest/>
      <Footer/>
    </div>
  );
}

export default App;
