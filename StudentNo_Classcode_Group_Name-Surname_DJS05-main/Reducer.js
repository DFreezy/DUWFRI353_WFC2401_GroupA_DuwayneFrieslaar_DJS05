const SUBTRACT = 'SUBTRACT';

/**
 * Action creator for decrementing the count.
 * @returns {Object} Action object for decrementing.
 */
export function decrement() {
    return { type: SUBTRACT };
}

