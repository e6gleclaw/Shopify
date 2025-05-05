import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
