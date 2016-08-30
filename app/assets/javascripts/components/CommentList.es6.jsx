class CommentList extends React.Component {
  constructor() {
    super()
    this.state = { comments: [] }
  }

  componentDidMount() {
    $.post('/comments', this.props).done((response) => {
      this.setState( {comments: response  } )
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
            return <li>{comment.title} {comment.body} <Vote comment={comment} /> </li>
          })}
        </ul>
      </div>

    )
  }
}
