import { error } from '@sveltejs/kit';

import { posts } from '$lib/data';

export async function load({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const post = posts.find((post) => post.slug === slug);

	if (!post) {
		throw error(404, "Post doesn't exist");
	}

	return {
		headers: {
			title: post.title,
			wallpaper: post.wallpaper,
			date: post.date,
			tags: post.tags ? post.tags : []
		},
		body: {
			content: post.content
		}
	};
}