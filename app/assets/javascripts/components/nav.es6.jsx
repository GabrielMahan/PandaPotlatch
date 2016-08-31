class Nav extends React.Component  {

  render () {
    let { Navbar, NavDropdown, NavItem, MenuItem, Nav, Button } = ReactBootstrap;
    var csrfValue = $("meta[name='csrf-token']").attr('content');

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
                {this.props.userSignedIn ?
                  (
                    <form id="nav-button" action='/users/sign_out' method="POST">
                      <input
                        type="hidden"
                        name="_method"
                        value="delete" />
                      <input
                      type='hidden'
                      name='authenticity_token'
                      value={csrfValue} />
                      <Button key={2} bsStyle="link" type="submit">Log Out</Button>
                    </form>)
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
