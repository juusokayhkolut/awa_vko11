import React, { useEffect, useState } from 'react';
import '../styles/about.css';

interface Post {
  title: string;
  id: number;
  body: string;
}

const About: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleItems, setVisibleItems] = useState<number>(12);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/post');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch posts");
      }
    };

    fetchPosts();
  }, []);

  const handleShowMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 12);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>About page</h2>
      <div className="grid-container">
        {posts.slice(0, visibleItems).map((post) => (
          <div key={post.id} className="grid-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      {visibleItems < posts.length && (
        <button onClick={handleShowMore} style={{ margin: '16px auto', display: 'block' }}>
          Show more
        </button>
      )}
    </div>
  );
};

export default About;