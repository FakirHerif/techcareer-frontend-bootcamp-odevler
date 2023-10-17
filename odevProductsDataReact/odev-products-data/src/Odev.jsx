import React, { useState } from 'react'
import { productsData } from './data/productsData'

function Odev() {
    const [datas, setDatas] = useState(productsData);
    const [sortData, setSortData] = useState('AtoZ');
    
    const sortDatas = (column) => {
        const sortedDatas = [...datas];
        if (sortData === 'AtoZ') {
            sortedDatas.sort((a, b) => a[column].localeCompare(b[column]));
            setSortData('ZtoA');
        } else {
            sortedDatas.sort((a, b) => b[column].localeCompare(a[column]));
            setSortData('AtoZ');
        }
        setDatas(sortedDatas);
    }

    const deleteData = (id) => {
        let result = window.confirm("Are you sure to delete it?");
        if (result) {
            let fdatas = datas.filter(ali => ali.id !== id);
            setDatas([...fdatas]);
        }
    }
  return (
<>
    <h1>Total Data Length: {datas.length}</h1>
    <table className='w3-table w3-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th onClick={() => sortDatas('companyName')}>COMPANY NAME</th>
                <th onClick={() => sortDatas('contactName')}>CONTACT NAME</th>
                <th onClick={() => sortDatas('contactTitle')}>CONTACT TITLE</th>
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
                            </div>  
                        </td>
                        <td><button className='w3-button w3-red' onClick={() => deleteData(item.id)}>DELETE</button></td>
                    </tr>
                })
            }
        </tbody>
    </table>





</>
  )
}

export default Odev