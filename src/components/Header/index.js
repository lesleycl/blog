import React from 'react';
import Link from 'gatsby-link';
import logo from '../../imgs/ms-icon-144x144.png'; // Tell Webpack this JS file uses this image

const Header = () => (
  <div
    style={{
      background: '#f5f5f5',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#333',
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="Li Chai"
            style={{
              width: 50,
            }}></img>
        </Link>
      </h1>
    </div>

  </div>
)

export default Header
