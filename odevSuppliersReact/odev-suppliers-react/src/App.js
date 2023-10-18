import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Suppliers from "./pages/Suppliers"
import Orders from "./pages/Orders"

function App() {
  return (
<>

<ul style={{ display: 'flex', padding: 0, listStyle: 'none' }}>
  <li style={{ marginRight: '20px', fontSize: '30px' }}>
  <Link to="/">Home</Link>
  </li>
  <li style={{ marginRight: '20px', fontSize: '30px' }}><Link to="/suppliers">Suppliers</Link></li>
  <li style={{ fontSize: '30px' }}><Link to="/orders">Orders</Link></li>
</ul>

<Routes>
    <Route path= "/" element= {<Home/>}/>
    <Route path= "/suppliers" element= {<Suppliers/>}/>
    <Route path= "/orders" element= {<Orders/>}/>
</Routes>

</>
  );
}

export default App;
