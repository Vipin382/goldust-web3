import {Route,Routes} from "react-router-dom"
import { GoldDust } from './pages';

function App() {
  return (
   <Routes>
    <Route path={"/"} element={<GoldDust/>}/>
   </Routes>
  );
}

export default App;
