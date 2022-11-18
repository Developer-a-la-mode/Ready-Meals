import './App.css';
import Navigation from './Components/Layout/Navigation';
import Hero from './Components/Layout/Hero';
import About from './Components/Layout/About';
import Card from './Components/UI/Card';
import WeeklyMeals from './Components/Menu/WeeklyMeals';

function App() {
  return <div>
    <Navigation />
    <Hero />
    <About />
    <Card title={"title"} description={"description"} price={"$3.99"}/>
    <WeeklyMeals />
  </div>
}

export default App;
