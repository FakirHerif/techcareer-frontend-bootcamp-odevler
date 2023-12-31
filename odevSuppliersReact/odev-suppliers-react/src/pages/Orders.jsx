import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/tr'

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        veriGetir();
    }, [])

    const veriGetir = () => {
        axios.get('https://northwind.vercel.app/api/orders')
        .then(res => {
            setOrders(res.data)
        })
    }

    const deleteOrders = (id) => {
        let eminmisin = window.confirm("Are you sure you want to delete this?");
        if (eminmisin) {
            axios.delete('https://northwind.vercel.app/api/orders/' + id)
            .then(res => {
                veriGetir();
            })
        }
    }

    const zaman = (tarih) => {
        return moment(tarih).format('LLL');
      };

  return (
    <>
    <h1>Orders Length: {orders.length}</h1>
    <br />
    <table className='w3-table w3-striped'>
        <thead>
            <tr>
                <th>ID</th>
                <th>CUSTOMER ID</th>
                <th>EMPLOYEE ID</th>
                <th>ORDER DATE</th>
                <th>REQUIRED DATA</th>
                <th>SHIPPED DATE</th>
                <th>SHIP VIA</th>
                <th>FREIGHT</th>
                <th>SHIP NAME</th>
                <th>SHIP ADRESS</th>
                <th>DETAILS</th>
            </tr>
        </thead>
    
    <tbody>
        {
            orders && orders.map(orders => {
                return <tr>
                    <td>{orders.id}</td>
                    <td>{orders.customerId}</td>
                    <td>{orders.employeeId}</td>
                    <td>{zaman(orders.orderDate)}</td>
                    <td>{zaman(orders.requiredDate)}</td>
                    <td>{zaman(orders.shippedDate)}</td>
                    <td>{orders.shipVia}</td>
                    <td>{orders.freight}</td>
                    <td>{orders.shipName}</td>
                    <td>
                        <div>
                            Street: {orders.shipAddress.street}
                            <br />
                            City: {orders.shipAddress.city}
                            <br />
                            Region: {orders.shipAddress.region}
                            <br />
                            Postal Code: {orders.shipAddress.postalcode}
                            <br />
                            Country: {orders.shipAddress.country}
                            <br />
                        </div>
                    </td>
                    <td>
                        <div>
                            Street: {orders.details[0].productId}
                            <br />
                            City: {orders.details[0].unitPrice}
                            <br />
                            Region: {orders.details[0].quantity}
                            <br />
                            Postal Code: {orders.details[0].discount}
                            <br />
                        </div>
                    </td>
                    <td><button className='w3-button w3-red' onClick={() => deleteOrders(orders.id)}>Delete</button></td>
                </tr>
            })
        }
    </tbody>
    </table>

    </>
  )
}

export default Orders