import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Suppliers() {

    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        veriGetir();
    }, [])

    const veriGetir = () => {
        axios.get('https://northwind.vercel.app/api/suppliers')
        .then(res => {
            setSuppliers(res.data)
        })
    }

    const deleteSuppliers = (id) => {
        let eminmisin = window.confirm("Are you sure you want to delete this?");
        if (eminmisin) {
            axios.delete('https://northwind.vercel.app/api/suppliers/' + id)
            .then(res => {
                veriGetir();
            })
        }
    }
    

  return (
    <>
    
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>COMPANY NAME</th>
                <th>CONTACT NAME</th>
                <th>CONTACT TITLE</th>
                <th>ADDRESS</th>
            </tr>
        </thead>
    </table>
    <tbody>
        {
            suppliers && suppliers.map(suppliers => {
                return <tr>
                    <td>{suppliers.id}</td>
                    <td>{suppliers.companyName}</td>
                    <td>{suppliers.contactName}</td>
                    <td>{suppliers.contactTitle}</td>
                    <td>
                        <div>
                            Street: {suppliers.address.street}
                            <br />
                            City: {suppliers.address.city}
                            <br />
                            Region: {suppliers.address.region}
                            <br />
                            Postal Code: {suppliers.address.postalcode}
                            <br />
                            Country: {suppliers.address.country}
                            <br />
                            Phone: {suppliers.address.phone}
                        
                        </div>
                    </td>
                    <td><button onClick={() => deleteSuppliers(suppliers.id)}>Delete</button></td>
                </tr>
            })
        }
    </tbody>
    </>
  )
}

export default Suppliers