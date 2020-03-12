import React from "react";
import ReactDOM from "react-dom";
import EditBookmark from "./EditBookmark";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const mockMatch = {
    params: {
      bookmarkId: 20
    }
  };
  ReactDOM.render(<EditBookmark match={mockMatch} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
