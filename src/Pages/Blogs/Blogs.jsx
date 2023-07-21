import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";


const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Welcome to Our Blog</h1>
      <div className="grid grid-cols-2 gap-5  ">
        {
          blogs.map(blog=><Blog
          key={blog._id}
          blog={blog}
          ></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;