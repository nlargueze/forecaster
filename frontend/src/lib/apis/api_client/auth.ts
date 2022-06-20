import { todo } from './utils';
import tests from './tests';

/**
 * A user
 */
export class User {
	id: string;
	firstName: string;
	lastName: string;

	constructor(id: string, firstName: string, lastName: string) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

/**
 * New user interface
 */
export interface NewUser {
	email: string;
	password: string;
}

/**
 * API client for authentication
 */
export class AuthApiClient {
	/**
	 * API URL
	 */
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	/**
	 * Signups a new user
	 */
	public async signup(newUser: NewUser): Promise<{
		token: string;
		user: User;
	}> {
		todo();
		return {
			token: tests.token,
			user: new User('1', 'nick', 'Largueze')
		};
	}

	/**
	 * Logins a new user
	 */
	public async login(
		email: string,
		password: string
	): Promise<{
		token: string;
		user: User;
	}> {
		todo();
		return {
			token: tests.token,
			user: new User('1', 'nick', 'Largueze')
		};
	}

	/**
	 * Requests a password reset
	 */
	public async requestPasswordReset(
		email: string,
		password: string
	): Promise<{
		token: string;
		user: User;
	}> {
		todo();
		return {
			token: tests.token,
			user: new User('1', 'nick', 'Largueze')
		};
	}
}
