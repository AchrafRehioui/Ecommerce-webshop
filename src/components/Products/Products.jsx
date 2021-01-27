import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    {id: 1, name: 'Shoes',  description: 'Running shoes.', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rsehsxxckup61rssweip/renew-run-mens-running-shoe-xdx3PD.jpg'},
    {id: 2, name: 'HP',  description: 'HP Laptop.', price: '$10', image: 'https://webobjects2.cdw.com/is/image/CDW/5651855?$product-main$'},
]

const Products = () => {
    return (
        <main>
        <Grid container justify="center" spacing ={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    );

  
}

export default Products;