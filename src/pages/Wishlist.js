import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <Container maxWidth='lg' sx={{ mt: 4 }}>
      <Typography variant='h4' component='h1' gutterBottom>
        My Wishlist
      </Typography>
      {wishlist.length === 0 ? (
        <Typography variant='h6' color='text.secondary'>
          Your wishlist is empty
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {wishlist.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Wishlist;
