import React from 'react';
import ProductList from '../components/ProductList';
import { useLocation, useParams } from 'react-router-dom';

function Products() {
    console.log(useParams(), useLocation());
    const location = useLocation();
    return <ProductList pathname={location.pathname} />;
}

export default Products;