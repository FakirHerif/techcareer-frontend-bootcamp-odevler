import React, { useState } from 'react'
import { productsData } from './data/productsData'

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
        <tbody>
            {
                datas.map(item => {
                    return <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                        <td>
                            <div>
                                Street: {item.address.street}
                                <br />
                                City: {item.address.city}
                                <br />
                                Region: {item.address.region}
                                <br />
                                Postal Code: {item.address.postalCode}
                                <br />
                                Country: {item.address.country}
                                <br />
                                Phone: {item.address.phone}
                                </div></td>
                        <td><button>DELETE</button></td>
                    </tr>
                })
            }
        </tbody>
    </table>





</>
  )
}

export default Odev