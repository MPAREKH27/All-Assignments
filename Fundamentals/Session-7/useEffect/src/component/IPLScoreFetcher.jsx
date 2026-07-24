import React, { useEffect, useState } from "react";

const IPLScoreFetcher = () => {
  const [headline, setHeadline] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setHeadline(data[0].title))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>IPL Match Headline</h2>
      <p>{headline || "Loading headline..."}</p>
    </div>
  );
};

export default IPLScoreFetcher;
