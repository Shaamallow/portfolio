// theme.ts
import { writable } from 'svelte/store';

// Initial value
const initialValue = false;

// Create the writable store
const lightTheme = writable(initialValue);

// Update function
function toggleTheme() {
	lightTheme.update((currentValue) => !currentValue);
}

// Export the store and the update function
export { lightTheme, toggleTheme };
