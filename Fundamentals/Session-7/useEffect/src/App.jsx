import React from "react";
import TrendingSongs from "./component/TrendingSongs";
import IPLScoreFetcher from "./component/IPLScoreFetcher";
import MovieSuggestions from "./component/MovieSuggestions";
import DataFetcher from "./component/DataFetcher";

function App() {
  return (
    <div>
      <TrendingSongs />
      <IPLScoreFetcher />
      <MovieSuggestions />
      <DataFetcher />
    </div>
  );
}

export default App;
