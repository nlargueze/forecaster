/**
 * Utility function to indicate that a method needs to be implemented.
 * @returns NEVER
 * @throws {Error}
 */
export function todo(message?: string) {
	console.error(`[TODO] ${message}` || '[TODO] not implemented.');
}
