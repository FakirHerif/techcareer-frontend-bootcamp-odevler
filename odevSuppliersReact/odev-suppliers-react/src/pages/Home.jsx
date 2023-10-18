import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <h1>ANASAYFA</h1>
        <h2>Suppliers Listesi için navbardaki Suppliers'e veya <Link to="/suppliers">bu bağlantıya</Link> tıklayın.</h2>
        <h2>Orders Listesi için navbardaki Orders'a veya <Link to="/orders">bu bağlantıya</Link> tıklayın.</h2>
    </>
  )
}

export default Home