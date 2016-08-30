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

  render() {
    return (
      <div>
        <ul>
          {this.state.comments.map(function(comment) {
            return <li>{comment.title} {comment.body} <Vote comment={comment}> </li>
          })}
        </ul>
      </div>

    )
  }
}
