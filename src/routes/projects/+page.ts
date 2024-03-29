import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/projects');
	const projects: Post[] = await response.json();
	return { projects };
}
