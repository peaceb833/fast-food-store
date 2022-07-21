import Nav from './component/Nav';
import Body from './component/Body';
import Footer from './component/Footer';
import Menu from './component/Menu';
import Cart from './component/Cart'
import Main from './component/Main';
import Main2 from './component/Main2';
import Testimony from './component/Testimony';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Pizza from './component/Pizza';

const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Body />
      <Menu />
      <Main />
      <Cart />
      <Main2 />
      <Testimony />
      <Footer />
     
     
     
    </div>
  )
}

export default App