import { todo } from './utils';
import * as tests from './tests';
import { portfolios } from './tests';

/**
 * A portfolio asset
 */
export class Asset {
	id: string;
	name: string;

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}
}

/**
 * A portfolio
 */
export class Portfolio {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	assets: Asset[];

	constructor(
		id: string,
		name: string,
		description: string,
		createdAt: Date,
		updatedAt: Date,
		assets: Asset[]
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.assets = assets;
	}
}

/**
 * API client for portfolios
 */
export class PortfoliosApiClient {
	/**
	 * API URL
	 */
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	/**
	 * Returns all user portfolios
	 */
	public async get_all(): Promise<Portfolio[]> {
		todo();
		return tests.portfolios;
	}
}
