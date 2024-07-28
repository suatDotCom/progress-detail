import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ProgressDetail from "./ProgressDetail";


ReactDOM.render(
  <StrictMode>
    <ProgressDetail current={17} max={92} predicted={87} risk={[11, 12, 13]} />
  </StrictMode>,
  document.getElementById("root")
);
