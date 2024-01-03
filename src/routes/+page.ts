import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const responsePosts = await fetch('api/posts');
	const responseProjects = await fetch('api/projects');
	const posts: Post[] = await responsePosts.json();
	const projects: Post[] = await responseProjects.json();
	return { posts, projects };
}
