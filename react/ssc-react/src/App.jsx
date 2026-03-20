import { useEffect, useState } from "react";
import "./App.css";

// Simulated server API (no real backend)
const fetchPosts = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Server-like post #1",
          body: "Rendered from mock server data.",
        },
        {
          id: 2,
          title: "Server-like post #2",
          body: "Uses async fetch simulation.",
        },
        {
          id: 3,
          title: "Server-like post #3",
          body: "Perfect for teaching SSR concepts.",
        },
      ]);
    }, 900);
  });

function ServerSideCard({ post }) {
  return (
    <article className="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
}

export default function App() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <main style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>Server-side Component Simulation (no server)</h1>
      <p>
        This shows a client-first app mimicking server behavior with a delayed
        fake fetch.
      </p>

      {loading ? (
        <p>Loading simulated server content ...</p>
      ) : (
        posts.map((post) => <ServerSideCard key={post.id} post={post} />)
      )}

      <section style={{ marginTop: 24 }}>
        <h2>Teaching Notes:</h2>
        <ul>
          <li>useEffect + async fetch = “data from server” pattern</li>
          <li>Component receives server data as props</li>
          <li>Swap fetchPosts() with real API later (same UI code)</li>
        </ul>
      </section>
    </main>
  );
}
