import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// TASK 1 — TrendingSongs
// Logs 'Component mounted' to the console on first render
// ─────────────────────────────────────────────
function TrendingSongs() {
  useEffect(() => {
    console.log("Component mounted");
  }, []); // empty dependency array → runs only once on mount

  return (
    <section style={styles.card}>
      <span style={styles.badge}>Task 1</span>
      <h2 style={styles.cardTitle}>🎵 TrendingSongs</h2>
      <p style={styles.desc}>
        Open your browser console — you'll see{" "}
        <code style={styles.code}>"Component mounted"</code> logged exactly once
        when this component first renders.
      </p>
      <div style={styles.codeBlock}>
        <pre>{`useEffect(() => {
  console.log("Component mounted");
}, []);`}</pre>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TASK 2 — IPLScoreFetcher
// Fetches post data on mount, shows first post title as "match headline"
// ─────────────────────────────────────────────
function IPLScoreFetcher() {
  const [headline, setHeadline] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setHeadline(data[0].title))
      .catch((err) => setError(err.message));
  }, []); // runs once on mount

  return (
    <section style={styles.card}>
      <span style={styles.badge}>Task 2</span>
      <h2 style={styles.cardTitle}>🏏 IPLScoreFetcher</h2>
      <p style={styles.desc}>Fetches live data on mount and shows the first post title as a match headline.</p>

      <div style={styles.headlineBox}>
        {error ? (
          <p style={styles.error}>❌ {error}</p>
        ) : headline ? (
          <>
            <p style={styles.label}>MATCH HEADLINE</p>
            <p style={styles.headline}>
              {headline.charAt(0).toUpperCase() + headline.slice(1)}
            </p>
          </>
        ) : (
          <p style={styles.loading}>Fetching match data…</p>
        )}
      </div>

      <div style={styles.codeBlock}>
        <pre>{`useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setHeadline(data[0].title));
}, []);`}</pre>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TASK 3 — MovieSuggestions
// Fetches users on mount, shows names in a list, with a loading state
// ─────────────────────────────────────────────
function MovieSuggestions() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // ← loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setMovies(data);
        setLoading(false); // data received → hide loading message
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section style={styles.card}>
      <span style={styles.badge}>Task 3</span>
      <h2 style={styles.cardTitle}>🎬 MovieSuggestions</h2>
      <p style={styles.desc}>
        Displays a loading message while fetching, then renders a list of names.
      </p>

      {loading && <p style={styles.loading}>⏳ Loading suggestions…</p>}
      {error && <p style={styles.error}>❌ {error}</p>}
      {!loading && !error && (
        <ul style={styles.list}>
          {movies.map((m) => (
            <li key={m.id} style={styles.listItem}>
              🎞 {m.name}
            </li>
          ))}
        </ul>
      )}

      <div style={styles.codeBlock}>
        <pre>{`const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      setMovies(data);
      setLoading(false); // hide loading once data arrives
    });
}, []);`}</pre>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// TASK 4 — DataFetcher (Refactored)
// Original: fetches on button click
// Refactored: fetches automatically on mount via useEffect
// UI and styling are UNCHANGED
// ─────────────────────────────────────────────
function DataFetcher() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ ONLY the fetch logic moved here — UI below is identical to the original
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  // ── Original UI (unchanged) ──────────────────
  return (
    <section style={styles.card}>
      <span style={styles.badge}>Task 4</span>
      <h2 style={styles.cardTitle}>🔄 DataFetcher — Refactored</h2>
      <p style={styles.desc}>
        Fetch logic moved from a button's <code style={styles.code}>onClick</code> into{" "}
        <code style={styles.code}>useEffect</code>. Data now loads automatically on
        mount. UI &amp; styling are untouched.
      </p>

      {/* Original UI structure preserved */}
      <div style={styles.postBox}>
        {loading ? (
          <p style={styles.loading}>Loading post…</p>
        ) : (
          <>
            <p style={styles.label}>POST #{post.id}</p>
            <h3 style={styles.postTitle}>{post.title}</h3>
            <p style={styles.postBody}>{post.body}</p>
          </>
        )}
      </div>

      <div style={styles.diffBox}>
        <p style={styles.diffLabel}>BEFORE (button click)</p>
        <pre style={styles.diffOld}>{`const handleClick = () => {
  fetch("/api/post/1").then(...).then(setPost);
};
<button onClick={handleClick}>Load</button>`}</pre>

        <p style={styles.diffLabel}>AFTER (useEffect on mount)</p>
        <pre style={styles.diffNew}>{`useEffect(() => {
  fetch("/api/post/1").then(...).then(setPost);
}, []);
// button removed — data loads automatically`}</pre>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Root App — renders all four tasks
// ─────────────────────────────────────────────
export default function App() {
  return (
    <div style={styles.root}>
      <header style={styles.header}>
        <h1 style={styles.title}>React useEffect — 4 Tasks</h1>
        <p style={styles.subtitle}>
          Mounting, data fetching, loading states & refactoring
        </p>
      </header>

      <div style={styles.grid}>
        <TrendingSongs />
        <IPLScoreFetcher />
        <MovieSuggestions />
        <DataFetcher />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────
const styles = {
  root: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
    padding: "32px 20px 60px",
    color: "#e2e8f0",
  },
  header: {
    textAlign: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 800,
    margin: 0,
    background: "linear-gradient(90deg, #a78bfa, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    marginTop: 8,
    color: "#94a3b8",
    fontSize: 15,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: 24,
    maxWidth: 1100,
    margin: "0 auto",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 16,
    padding: "24px 24px 20px",
    backdropFilter: "blur(8px)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  badge: {
    display: "inline-block",
    background: "linear-gradient(90deg,#a78bfa,#60a5fa)",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    borderRadius: 6,
    padding: "2px 10px",
    letterSpacing: 1,
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  cardTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 700,
    color: "#f1f5f9",
  },
  desc: {
    margin: 0,
    fontSize: 13.5,
    color: "#94a3b8",
    lineHeight: 1.6,
  },
  code: {
    background: "rgba(167,139,250,0.15)",
    color: "#a78bfa",
    borderRadius: 4,
    padding: "1px 5px",
    fontSize: 12.5,
    fontFamily: "monospace",
  },
  codeBlock: {
    background: "#0d1117",
    borderRadius: 10,
    padding: "14px 16px",
    marginTop: 4,
    overflow: "auto",
  },
  headlineBox: {
    background: "rgba(96,165,250,0.08)",
    border: "1px solid rgba(96,165,250,0.2)",
    borderRadius: 10,
    padding: "14px 16px",
  },
  headline: {
    margin: 0,
    fontSize: 15,
    fontWeight: 600,
    color: "#bfdbfe",
    lineHeight: 1.5,
    textTransform: "capitalize",
  },
  label: {
    margin: "0 0 4px",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.5,
    color: "#60a5fa",
    textTransform: "uppercase",
  },
  loading: {
    margin: 0,
    color: "#fbbf24",
    fontSize: 13.5,
    fontStyle: "italic",
  },
  error: {
    margin: 0,
    color: "#f87171",
    fontSize: 13.5,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    maxHeight: 220,
    overflowY: "auto",
  },
  listItem: {
    background: "rgba(167,139,250,0.08)",
    border: "1px solid rgba(167,139,250,0.15)",
    borderRadius: 8,
    padding: "7px 12px",
    fontSize: 13.5,
    color: "#ddd6fe",
  },
  postBox: {
    background: "rgba(96,165,250,0.07)",
    border: "1px solid rgba(96,165,250,0.2)",
    borderRadius: 10,
    padding: "14px 16px",
  },
  postTitle: {
    margin: "4px 0 8px",
    fontSize: 14,
    fontWeight: 600,
    color: "#bfdbfe",
    textTransform: "capitalize",
  },
  postBody: {
    margin: 0,
    fontSize: 12.5,
    color: "#94a3b8",
    lineHeight: 1.6,
  },
  diffBox: {
    background: "#0d1117",
    borderRadius: 10,
    padding: "14px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  diffLabel: {
    margin: "4px 0 2px",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1,
    color: "#64748b",
    textTransform: "uppercase",
  },
  diffOld: {
    margin: 0,
    padding: "8px 12px",
    background: "rgba(239,68,68,0.08)",
    border: "1px solid rgba(239,68,68,0.2)",
    borderRadius: 6,
    fontSize: 11.5,
    color: "#fca5a5",
    overflowX: "auto",
  },
  diffNew: {
    margin: 0,
    padding: "8px 12px",
    background: "rgba(34,197,94,0.08)",
    border: "1px solid rgba(34,197,94,0.2)",
    borderRadius: 6,
    fontSize: 11.5,
    color: "#86efac",
    overflowX: "auto",
  },
};