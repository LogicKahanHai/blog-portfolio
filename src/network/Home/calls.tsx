import { BlogTeaserProps } from "../../components/Home/BlogTeaser";

async function getBlogTeasers(): Promise<BlogTeaserProps[]> {
    const response: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const blogTeasers: BlogTeaserProps[] = data.map((post: any) => {
        return {
            title: post.title,
            date: new Date().toISOString(),
            description: post.body,
            link: `/blog/${post.id}`,
            tags: ['react', 'javascript', 'typescript'],
        };
    }
    );
    return blogTeasers;
}

export { getBlogTeasers };