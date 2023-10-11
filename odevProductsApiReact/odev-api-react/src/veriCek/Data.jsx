import React from 'react';
import { veriler } from '../veriler/veriler'


function Data() {

    return (
        <>
            <table className='w3-table'>

                <thead>
                    <tr>
                        <th style={{color: "red"}}>Name</th>
                        <th style={{color: "red"}}>Unit Price</th>
                        <th style={{color: "red"}}>Discontinued</th>
                        <th style={{color: "red"}}>Quantity Per Unit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        veriler.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.discontinued ? 'True' : 'False'}</td>
                            <td>{item.quantityPerUnit}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </>)
}

export default Data;
