import { error } from '@sveltejs/kit';

import { posts } from '$lib/data';

export async function load() {
	// return an array of all posts with only the headers from each post
	let headers = posts.map((post) => {
		return {
			slug: '/posts/' + post.slug,
			title: post.title,
			wallpaper: post.wallpaper ? post.wallpaper : '/wallpaper2.jpg',
			date: post.date ? post.date : '',
			tags: post.tags ? post.tags : []
		};
	});
	return { headers };
}
