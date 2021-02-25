
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Anasayfa} from './Anasayfa/Anasayfa';
import {Detay} from './Detay/Detay'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Anasayfa} exact />
        <Route path='/detay' component={Detay} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
