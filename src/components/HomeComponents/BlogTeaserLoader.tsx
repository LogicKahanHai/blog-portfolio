import { BlogTeaserSkeleton } from "./BlogTeaser";

const BlogTeaserLoader: React.FC = () => {
    return (
        <div className="flex flex-col gap-5">
            <BlogTeaserSkeleton />
            <BlogTeaserSkeleton />
            <BlogTeaserSkeleton />
        </div>
    );
}

export default BlogTeaserLoader;

