import React, { useEffect } from "react";

const TrendingSongs = () => {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h2>Trending Songs Component</h2>;
};

export default TrendingSongs;
