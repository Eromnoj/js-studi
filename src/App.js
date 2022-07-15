import './style/App.sass'
import Game from './components/Game'
import Notices from './components/Notices'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

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

        <footer className='footer'> {/* Footer with links to the different elements */}
          <p><span><Link to='/'>Jeu</Link></span>  <span><Link to='/notices'>Mentions légales</Link></span></p>
        </footer>
      </div>
    </Router>

  );
}

export default App;
