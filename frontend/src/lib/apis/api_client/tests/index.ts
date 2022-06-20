import { User } from '../auth';
import { Portfolio } from '../portolios';

export default {
	// user: new User('123', 'Nick', 'Largueze'),
	token: '__token__',
	portfolios: [
		new Portfolio('1', 'Portfolio 1', '', new Date(), new Date(), []),
		new Portfolio('2', 'Portfolio 2', '', new Date(), new Date(), [])
	]
};

export const portfolios = [
	new Portfolio('1', 'Portfolio 1', '', new Date(), new Date(), []),
	new Portfolio('2', 'Portfolio 2', '', new Date(), new Date(), [])
];
