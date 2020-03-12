import React from "react";
import ReactDOM from "react-dom";
import EditBookmark from "./EditBookmark";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EditBookmark match={mockMatch} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
