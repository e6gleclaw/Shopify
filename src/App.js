import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { WishlistProvider } from "./context/WishlistContext";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <WishlistProvider>
      <Router>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Shopify Storefront
            </Typography>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/wishlist'>
              Wishlist
            </Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </Container>
      </Router>
    </WishlistProvider>
  );
}

export default App;
