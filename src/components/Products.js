import React from 'react';
import { makeStyles } from '@material-ui/core';
import ImageCard from './ImageCard';
import products from '../static/products';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { flexDirection: 'column' },
  },
}));

const Products = () => {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="products-offered">
      <ImageCard product={products[0]} checked={checked} />
      <ImageCard product={products[1]} checked={checked} />
    </div>
  );
};

export default Products;
