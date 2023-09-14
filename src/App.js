 // 1. Imaport area
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Aside from './Components/Aside';
import Section from './Components/Section';
import Footer from './Components/Footer';

// 2. function defination area
function App() {
  return (
    <>
    <Header />
    <main>
    <Aside />
    <Section />
    </main>
    <Footer />
    </>
  );
}
 // 3. Export area
export default App;
