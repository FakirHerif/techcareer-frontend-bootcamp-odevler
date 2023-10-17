import React, { useState } from 'react'
import { productsData } from './data/productsData'

function Odev() {
    const [datas, setDatas] = useState(productsData);
    const [sortData, setSortData] = useState(false);


    const sortId = () => {
        const sortedDatas = [...datas];
        if (sortData) {
            sortedDatas.sort((a, b) => a.id - b.id);
        } else {
            sortedDatas.sort((a, b) => b.id - a.id);
        }
        setDatas(sortedDatas);
        setSortData(!sortData);
    }

    const sortField = (field) => {
        const sortedDatas = [...datas];
        if (sortData) {
            sortedDatas.sort((a, b) => {
                if (!a[field]) return 1;
                if (!b[field]) return -1;
                return a[field].localeCompare(b[field]);
            });
        } else {
            sortedDatas.sort((a, b) => {
                if (!a[field]) return -1;
                if (!b[field]) return 1;
                return b[field].localeCompare(a[field]);
            });
        }
        setDatas(sortedDatas);
        setSortData(!sortData);
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
                <th>ID <button onClick={() => sortId('id')}>Sort</button></th>
                <th>COMPANY NAME <button onClick={() => sortField('companyName')}>Sort</button></th>
                <th>CONTACT NAME <button onClick={() => sortField('contactName')}>Sort</button></th>
                <th>CONTACT TITLE <button onClick={() => sortField('contactTitle')}>Sort</button></th>
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