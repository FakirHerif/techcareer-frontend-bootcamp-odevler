import React, { useState } from 'react'
import {productsData} from './data/productsData'

function Odev() {

    const [datas, setDatas] = useState(productsData);


  return (
<>
    <h1>Total Data Length: {datas.length}</h1>
    <table className='w3-table w3-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>COMPANY NAME</th>
                <th>CONTACT NAME</th>
                <th>CONTACT TITLE</th>
                <th>ADDRESS</th>
                <th>DELETE</th>
            </tr>
        </thead>
    </table>





</>
  )
}

export default Odev