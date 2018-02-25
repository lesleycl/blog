// sections shared across multiple pages
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// listens for matches to a CSS media query
import Media from 'react-media'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import '../styles/index.css'
// import './index.scss'
import '../styles/style-override.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Li Chai | Blog"
      meta={[
        { name: 'description', content: `Li Chai's Blog` },
        { name: 'keywords', content: 'blog, design, UX' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
