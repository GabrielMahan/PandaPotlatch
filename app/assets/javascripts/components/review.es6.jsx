class Review extends React.Component {





  render() {
    return (
      <div>
        <h1> {JSON.parse(this.props.review).title} </h1>
        <p> Score: {JSON.parse(this.props.review).tomato_score}</p>
        <p>{JSON.parse(this.props.review).body}</p>
        <p></p>
      </div>
    )
  }
}
