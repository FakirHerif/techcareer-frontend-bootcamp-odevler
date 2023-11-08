import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Favorites = () => {
  const favoriteProducts = useSelector((state) => state.favoriteProducts);
  const dispatch = useDispatch();

  const handleDelete = (product) => {
    dispatch({
      type: 'DELETE_FAVORITE_PRODUCT',
      product,
    });
  };

  return (
    <>
      <h1>Total Favorites: {favoriteProducts.length}</h1>
      <table className='w3-table w3-striped'>
        <thead>
          <tr>
            <th>PRODUCTS NAME</th>
          </tr>
        </thead>
        <tbody>
          {favoriteProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <button className='w3-button w3-red' onClick={() => handleDelete(product)}>DELETE FAVORITES</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Favorites;
