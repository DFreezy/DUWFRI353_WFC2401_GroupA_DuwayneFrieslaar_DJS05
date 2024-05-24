const RESET = 'RESET';

/**
 * Action creator for resetting the count.
 * @returns {Object} Action object for resetting.
 */
export function reset() {
    return { type: RESET };
}

// Action type
const ADD = 'ADD';

/**
 * Action creator for incrementing the count.
 * @returns {Object} Action object for incrementing.
 */
export function increment() {
    return { type: ADD };
}
