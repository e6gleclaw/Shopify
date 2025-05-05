<<<<<<< HEAD
# Shopify Storefront

A React-based e-commerce application that simulates a Shopify storefront with a wishlist feature. This project demonstrates the implementation of a modern e-commerce interface with product browsing and wishlist functionality.

## Features

- 🛍️ Product browsing with a responsive grid layout
- ❤️ Wishlist functionality to save products for later
- 🎨 Modern UI using Material-UI components
- 🔄 State management using React Context API
- 🛣️ Client-side routing with React Router
- 📱 Responsive design for all device sizes

## Tech Stack

- React.js
- Material-UI (MUI)
- React Router DOM
- Context API for state management
- CSS3

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd shopify-storefront
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`

## Project Structure

```
shopify-storefront/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── ProductCard.js
│   ├── context/
│   │   └── WishlistContext.js
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── Wishlist.js
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Features in Detail

### Product Browsing

- View a grid of products on the home page
- Each product displays:
  - Product image
  - Name
  - Price
  - Description
  - Wishlist toggle button

### Wishlist Functionality

- Add/remove products to/from wishlist
- View all wishlisted items on a dedicated page
- Persistent wishlist state across page navigation
- Visual indication of wishlisted items

### Navigation

- Home page (`/`): Browse all products
- Wishlist page (`/wishlist`): View saved products

## State Management

The application uses React Context API for state management:

- `WishlistContext`: Manages the wishlist state and related functions
- Provides `addToWishlist` and `removeFromWishlist` functions
- Maintains wishlist state across component tree

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.


## Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Material-UI Icons](https://mui.com/material-ui/material-icons/)
=======
# Shopify
>>>>>>> 0f109a244b02d558b77296d2bd8755cc25bbe646
