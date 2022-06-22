import {Provider} from 'react-redux';
import './App.css';
import store from './store/configureStore';

import Todos from './components/Todos redux';

const App = () => (
  <Provider store={store}>
    <Todos/>
  </Provider>
);
 
export default App;






