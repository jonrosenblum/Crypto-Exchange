import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBInputGroup,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Nav() {
  const [showBasic, setShowBasic] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = () => {
    // Handle sign-up logic using formData.email and formData.password
  };

  const handleLogIn = () => {
    // Handle log-in logic using formData.email and formData.password
  };

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>CryptoX</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='justify-content-center mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem className='mr-6'>
              <MDBNavbarLink href='/market-scope'>Market Scope</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='mr-6'>
              <MDBNavbarLink href='/watch-list'>Watchlist</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className='mr-6'>
              <MDBNavbarLink href='wait-list'>Join Waitlist</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex w-auto'>
            <MDBInputGroup className='mb-3'>
              <input
                type='email'
                className='form-control'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Email'
                aria-label='Email'
              />
            </MDBInputGroup>

            <MDBInputGroup className='mb-3'>
              <input
                type='password'
                className='form-control'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Password'
                aria-label='Password'
              />
            </MDBInputGroup>
            <div className=''>
              <MDBBtn rounded onClick={handleSignUp}>Sign Up</MDBBtn>
              <MDBBtn rounded onClick={handleLogIn}>Login</MDBBtn>
            </div>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}