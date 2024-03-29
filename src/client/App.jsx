import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Inspirations from './components/Inspirations';
import MakeMyEscapes from './components/MakeMyEscapes';
import ViewMyEscapes from './components/ViewMyEscapes';

function App() {

  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/inspiration/category_1" element={<Inspirations />} />
            <Route path="/inspiration/category_2" element={<Inspirations />} />
            <Route path="/inspiration/category_3" element={<Inspirations />} />
            <Route path="/inspiration/category_all" element={<Inspirations />} />
            <Route path="/make_my_escapes" element={<MakeMyEscapes />} />
            <Route path="/view_my_escapes" element={<ViewMyEscapes />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
