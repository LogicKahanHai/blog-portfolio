import { BlogTeaserProps } from "../../components/HomeLanding/BlogTeaser";

async function getBlogTeasers(): Promise<BlogTeaserProps[]> {
    const response: Response = await fetch(import.meta.env.VITE_BACKEND_HOST + '/blog-teasers');
    const data = await response.json();
    return data;
}

export { getBlogTeasers };