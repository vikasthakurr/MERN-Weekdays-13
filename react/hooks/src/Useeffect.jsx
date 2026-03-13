import React, { useEffect, useState } from "react";

const Useeffect = () => {
  // useEffect Hook
  // Definition:
  // useEffect lets you run side effects in function components after render.
  // It accepts a callback and an optional dependency array.
  //
  // Notes / Caviats:
  // 1) Runs after paint by default (not during render).
  // 2) Dependency array controls when it re-runs.
  //    - [] runs only on mount/unmount.
  //    - [a, b] runs when a or b changes.
  //    - No array runs after every render.
  // 3) Always list all reactive values used inside the effect as dependencies.
  // 4) Return a cleanup function for subscriptions, timers, or listeners.
  // 5) Effects can run twice in React Strict Mode (development) to detect bugs.
  //
  // Example: API call on mount
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        if (!cancelled) setPosts(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Something went wrong");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section style={{ padding: "16px", lineHeight: 1.6 }}>
      <h1>Posts (API Call)</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Useeffect;
