import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Suppliers from "./pages/Suppliers"

function App() {
  return (
<>

<ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
  <li style={{ marginRight: '10px' }}>
  <Link to="/">Home</Link>
  </li>
  <li><Link to="/suppliers">Suppliers</Link></li>
</ul>

<Routes>
    <Route path= "/" element= {<Home/>}/>
    <Route path= "/suppliers" element= {<Suppliers/>}/>
</Routes>

</>
  );
}

export default App;
