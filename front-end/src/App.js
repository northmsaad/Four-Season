/** @format */
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destination from './components/destinations/Destination';
import Search from './components/search/Search';
import Select from './components/selects/Select';
import Imagecarousal from './components/imagecarousol/Imagecarousal';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
      <Imagecarousal />
      <Footer />
    </div>
  );
}

export default App;
