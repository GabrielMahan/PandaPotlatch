class Nav extends React.Component  {

  render () {
    return (
      <div className="NavBar">
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            {this.props.currentUser ?
              (<li><a href='/users/sign_out'>Log Out</a></li>)
            :
              ([<li><a href='/users/sign_up'>Register</a></li>,
              <li><a href='/users/sign_in'>Log In</a></li>])
            }
          </ul>
        </nav>
      </div>
    );
  }
}
