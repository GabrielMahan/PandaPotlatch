class App extends React.Component  {

  render() {
    return (
      <div className="main">
        <header id="side-nav">
          <Nav currentUser={this.props.currentUser} />
          <div id="app-title">PandaPotlach</div>
        </header>
      </div>
      )
  }
}
