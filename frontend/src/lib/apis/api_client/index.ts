import { AuthApiClient } from './auth';
import { PortfoliosApiClient, Portfolio, Asset } from './portolios';

export { Portfolio, Asset, PortfoliosApiClient };

/**
 * API client
 */
export class ApiClient {
	/**
	 * API URL
	 */
	private url: string;

	/**
	 *
	 * @param url
	 */
	private auth_api_client: AuthApiClient;

	/**
	 *
	 * @param url
	 */
	private portfolios_api_client: PortfoliosApiClient;

	constructor(url: string) {
		this.url = url;
		this.auth_api_client = new AuthApiClient(url);
		this.portfolios_api_client = new PortfoliosApiClient(url);
	}

	/**
	 *
	 * @returns the AuthApiClient instance
	 */
	public get auth(): AuthApiClient {
		return this.auth_api_client;
	}

	/**
	 *
	 * @returns the PortfoliosApiClient instance
	 */
	public get portfolios(): PortfoliosApiClient {
		return this.portfolios_api_client;
	}
}
