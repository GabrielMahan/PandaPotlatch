class CommentList extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
      var commentRoute = "/" + Object.keys(this.props)[0] + "s/" + this.props[Object.keys(this.props)[0]].id + "/comments"


    $.get(commentRoute).done((response) => {
      this.setState( { comments: response  } )
    })
  }


  handleCommentSubmit(event) {
    event.preventDefault()
    var data = {
      comment: {
        body: this.refs.commentBody.value,
        commentable_type: this.refs.commentType.value,
        commentable_id: this.refs.commentID.value
      }
    }
    $.post('/comments', data).done( (response) => {

        this.setState({comments: this.state.comments.concat(response)})
    })
  }

  render() {
    return (
      <div>
        <ul>
        <form id='newCommentForm' action='/comments' onSubmit={this.handleCommentSubmit.bind(this)} >
          <input ref="commentBody" name="comment[body]" placeholder="body" type="text" />
          <input ref="commentID" value={ this.props[Object.keys(this.props)[0]].id } name="comment[commentable_id]" type="hidden" />
          <input ref="commentType" value={ Object.keys(this.props)[0] } name="comment[commentable_type]" type="hidden" />
          <input type='submit' value="comment" />
        </form>
          {this.state.comments.map(function(comment, i) {
            return <li key={i}> {comment.body} <VoteButton comment={comment} /> </li>
          })}
        </ul>
      </div>
    )
  }
}
