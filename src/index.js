import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [testRating, setTestRating] = useState(0);
//   return (
//     <div>
//       <StarRatimg color="blue" onSetTestRating={setTestRating} />
//       <p> This movie was rated {testRating} </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRatimg maxRating={10} /> */}
    {/* <StarRatimg maxRating={12} color="red" size="23" /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
