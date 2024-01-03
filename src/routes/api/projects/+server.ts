import { json } from '@sveltejs/kit';
import type { Post } from '$lib/types';

async function getProjects() {
	let posts: Post[] = [];

	// vite feature to get all the post using a glob pattern
	const paths = import.meta.glob('/src/projects/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', ''); // get name of the slug from the path

		// get metadata from the file
		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const project = { ...metadata, slug } satisfies Post;
			// render only if published is true
			project.published && posts.push(project);
		}
	}

	// sort by date
	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	const projects = await getProjects();
	return json(projects);
}
