class App extends React.Component  {

  render() {
    return (
      <div>
        <Nav currentUser={this.props.current_user} />
        <Festival />
      </div>
      )
  }
}


