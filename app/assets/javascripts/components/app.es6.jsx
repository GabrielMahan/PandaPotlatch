class App extends React.Component  {

  render() {
    return (
      <div>
        <Nav userSignedIn={this.props.userSignedIn} />
        <Festival />
      </div>
      )
  }
}


