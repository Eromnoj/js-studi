import './style/App.sass'
import Game from './components/Game'
import Notices from './components/Notices'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path='/'
            element={<Game />}
          /> {/* Route for the game */}
          
          <Route 
          path='/notices' 
          element={ <Notices /> } 
          /> {/* Route for legal notices */}

        </Routes>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
