// proper type for the post
export type Post = {
	title: string;
	description: string;
	date: string;
	published: boolean;
	slug: string;
	tags: string[];
	url?: string;
	wallpaper?: string;
};
