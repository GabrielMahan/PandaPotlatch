class Nav extends React.Component  {

  render () {
    let { Navbar, NavDropdown, NavItem, MenuItem, Nav } = ReactBootstrap;

    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">PandaPotlach</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
              <NavItem key={1} href='/'>Home</NavItem>
                {this.props.currentUser ?
                  (<NavItem key={2} href='/users/sign_out'>Log Out</NavItem>)
                :
                  ([<NavItem key={3} href='/users/sign_up'>Register</NavItem>,
                  <NavItem key={4} href='/users/sign_in'>Log In</NavItem>])
                }
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
