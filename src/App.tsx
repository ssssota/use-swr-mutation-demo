import React from "react";

import { Getter } from "./components/Getter";
import { Poster } from "./components/Poster";

const App: React.FC = () => {
  return (
    <div>
      <Getter />
      <Poster />
    </div>
  );
};

export default App;
