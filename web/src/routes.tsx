import { Route, Switch} from 'react-router-dom';

import Products from './pages/Products';
import ProductItem from './pages/ProductItem';
import Cart from './pages/Cart';
import Requests from './pages/Requests';

const Routes = () => {
	return (
		<Switch>
			<Route component={Products} path="/" exact/>
			<Route component={ProductItem} path="/product/:id" exact/>
			<Route component={Cart} path="/cart" exact/>
			<Route component={Requests} path="/requests" exact/>
		</Switch>
	);
}

export default Routes;