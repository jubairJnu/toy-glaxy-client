

const Blog = ({blog}) => {
  const { question, answer}=blog;
  return (
  
      <div className="card w-96 bg-primary text-primary-content mx-auto">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{question}</h2>
    <p className="text-justify">{answer}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
    
  );
};

export default Blog;