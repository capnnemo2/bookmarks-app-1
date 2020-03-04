import React from "react";
import BookmarksContext from "../BookmarksContext";
import config from "../config";
import "./EditBookmark.css";

export default class EditBookmark extends React.Component {
  static contextType = BookmarksContext;

  state = {
    error: null
  };

  componentDidMount() {
    const bookmarkId = this.props.match.params.bookmarkId;
    fetch(`http://localhost:8000/api/bookmarks/${bookmarkId}`, {
      method: "GET"
    })
      .then(/*   */)
      .then(resData => {
        this.setState({
          /*   */
        });
      })
      .catch(err => {
        /*   */
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    //   need validation
    fetch(
      `https://localhost:8000/api/bookmarks/${this.props.match.bookmarkId}`,
      {
        method: "POST",
        body: JSON.stringify(this.state.inputValues)
      }
    ).then(/*   */);
  };

  handleClickCancel = () => {
    this.props.history.push("/");
  };

  render() {
    // const { title, url, description, rating } = this.state;
    return (
      <section className="EditBookmarkForm">
        <h2>Edit Bookmark</h2>
        <form className="EditBookmark__form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              tyoe="text"
              name="title"
              id="title"
              placeholder="fetch existing title"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="url">URL</label>
            <input
              type="url"
              name="url"
              id="url"
              placeholder="fetch existing url"
              required
            ></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" />
          </div>
          <div>
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              name="rating"
              id="rating"
              defaultValue="fetch existing rating"
              min="1"
              max="5"
              required
            ></input>
          </div>
          <div className="EditBookmark__buttons">
            <button type="button" onClick={this.handleClickCancel}>
              Cancel
            </button>{" "}
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </section>
    );
  }
}
