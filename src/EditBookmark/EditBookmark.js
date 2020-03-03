import React from "react";

export default class EditBookmark extends React.Component {
  componentDidMount() {
    const bookmarkId = this.props.match.params.bookmarkId;
    fetch(`https://localhost:8000/api/bookmarks/${bookmarkId}`, {
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

  render() {
    // const { title, url, description, rating } = this.state;
    return (
      <section className="EditBookmarkForm">
        <h2>Edit Bookmark</h2>
        <form onSubmit={this.handleSubmit}></form>
      </section>
    );
  }
}
