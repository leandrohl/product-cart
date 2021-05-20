import { Route, Switch} from 'react-router-dom';

import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import Cart from './pages/Cart';

const Routes = () => {
	return (
		<Switch>
			<Route component={Products} path="/" exact/>
			<Route component={ProductItem} path="/product/:id" exact/>
			<Route component={Cart} path="/cart" exact/>
		</Switch>
	);
}

export default Routes;