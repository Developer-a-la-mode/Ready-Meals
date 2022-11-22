import './App.css';
import Navigation from './Components/Layout/Navigation';
import Hero from './Components/Layout/Hero';
import About from './Components/Layout/About';
import Card from './Components/Menu/MealItem';
import WeeklyMeals from './Components/Menu/WeeklyMeals';

function App() {
  return <div>
    <Navigation />
    <Hero />
    <About />
    <WeeklyMeals />
  </div>
}

export default App;
