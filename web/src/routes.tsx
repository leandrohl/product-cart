import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';

import Products from './pages/Products';
import Product from './pages/Product';

const Routes = () => {
	return (
		<BrowserRouter>
			<Route component={Products} path="/" exact/>
			<Route component={Product} path="/product" exact/>
		</BrowserRouter>
	);
}

export default Routes;