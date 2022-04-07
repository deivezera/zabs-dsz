import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import ZabContent from 'zab_content/ZabContent'

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: zab-host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <ZabContent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

export default App