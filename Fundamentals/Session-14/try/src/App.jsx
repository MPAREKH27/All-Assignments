import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [songs, setSongs] = useState([]);
  const [teams, setTeams] = useState([]);
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [scoreError, setScoreError] = useState("");

  // Task 1 & 2
  const fetchSongs = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      );

      const data = await response.json();
      setSongs(data);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // Task 3
  const fetchScores = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status !== 200) {
        throw new Error("Error loading scores");
      }

      const data = await response.json();

      const dummyScores = data.slice(0, 4).map((item, index) => ({
        id: item.id,
        team: item.company.name,
        city: item.address.city,
        runs: [135, 169, 148, 162][index],
        wickets: [0, 1, 2, 4][index],
      }));

      setTeams(dummyScores);
    } catch (error) {
      setScoreError("Error loading scores");
    }
  };

  // Task 4
  const fetchPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      const data = await response.json();
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSongs();
    fetchScores();
    fetchPost();
  }, []);

  return (
    <div className="container">
      <h1>React Fetch Patterns</h1>

      <p className="subtitle">
        Tasks 1–4 · Error handling, Reload, Status checks & Bug fixes
      </p>

      <div className="cards">

        {/* Card 1 */}

        <div className="card">
          <h2>🎵 Trending Songs</h2>

          <p className="task">
            Task 1 & 2 · Fetch + Reload
          </p>

          {loading ? (
            <h3>Loading...</h3>
          ) : (
            songs.map((song, index) => (
              <div className="song" key={song.id}>
                <span className="number">
                  #{index + 1}
                </span>

                <span>{song.title}</span>
              </div>
            ))
          )}

          <button onClick={fetchSongs}>
            🔄 Reload
          </button>
        </div>

        {/* Card 2 */}

        <div className="card">
          <h2>🏏 IPL Scores</h2>

          <p className="task">
            Task 3 · Mock cricket data via /users
          </p>

          {scoreError ? (
            <h3>{scoreError}</h3>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>TEAM</th>
                  <th>CITY</th>
                  <th>RUNS</th>
                  <th>WKTS</th>
                </tr>
              </thead>

              <tbody>
                {teams.map((team) => (
                  <tr key={team.id}>
                    <td>{team.team}</td>
                    <td>{team.city}</td>
                    <td>
                      <strong>{team.runs}</strong>
                    </td>
                    <td>{team.wickets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Card 3 */}

        <div className="card">
          <h2>🐛 Buggy Code Fixed</h2>

          <p className="task">
            Task 4 · try/catch + response.ok
          </p>

          <div className="post">
            <h4>POST #{post.id}</h4>

            <h3>{post.title}</h3>

            <p>{post.body}</p>
          </div>

          <a href="/">View buggy vs fixed code</a>
        </div>

      </div>
    </div>
  );
}