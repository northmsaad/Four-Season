/** @format */
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Destination from './components/destinations/Destination';
import Search from './components/search/Search';
import Select from './components/selects/Select';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Select />
    </div>
  );
}

export default App;
