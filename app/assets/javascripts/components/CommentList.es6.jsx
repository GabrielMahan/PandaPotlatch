class CommentList extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
      var commentRoute = "/" + Object.keys(this.props)[0] + "s/" + this.props[Object.keys(this.props)[0]].id + "/comments"

      // debugger;
    $.get(commentRoute).done((response) => {
      this.setState( { comments: response  } )
    })
  }


  handleCommentSubmit() {
  }

  render() {
    return (
      <div>
        <ul>
        <form id='newCommentForm' action='/comments'>
          <input ref="commentTitle" name="comment[title]" placeholder="title" type="text" />
          <input ref="commentBody" name="comment[body]" placeholder="body" type="text" />
          <input type='submit' value="comment" />
        </form>
          {this.state.comments.map(function(comment) {
            return <li> {comment.body} <VoteButton comment={comment} /> </li>
          })}
        </ul>
      </div>
    )
  }
}
