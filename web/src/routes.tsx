import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Products from './pages/Products';
import ProductItem from './pages/ProductItem';

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Products} path="/" exact/>
			<Route component={ProductItem} path="/product/:id" exact/>
		</BrowserRouter>
	);
}

export default Routes;