import './App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Gradebook from './components/Gradebook';
import Assignment from './components/Assignment';
import AddAssignment from './components/AddAssignment';
import {BrowserRouter, Switch,  Route} from 'react-router-dom';

function App() {
@@ -20,6 +21,7 @@ function App() {
       <Switch>
        <Route exact path='/' component={Assignment} />
        <Route path='/gradebook' component={Gradebook} />
	<Route path='/addassignment' component={AddAssignment} />
       </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
