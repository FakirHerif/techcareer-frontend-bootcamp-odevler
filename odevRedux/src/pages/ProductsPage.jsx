import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

function ProductsPage() {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    showProducts();
  }, []);

  const showProducts = () => {
    axios.get('https://northwind.vercel.app/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log('HATA:', error);
      });
  };

  const addFavoriteProductToRedux = (product) => {
    dispatch({ 
      type: 'ADD_FAVORITE_PRODUCT', product });
  };

  return (
    <>
      <h1>Total Products: {products.length}</h1>
      <br />
      <table className='w3-table w3-striped'>
        <thead>
          <tr>
            <th>PRODUCTS NAME</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>
                  <button
                    className='w3-button w3-green'
                    onClick={() => addFavoriteProductToRedux(product)}>
                    ADD FAVORITES
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default ProductsPage;
