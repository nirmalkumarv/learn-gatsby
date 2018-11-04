import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Adobe Launch Extension</h1>
    <p>Demo Page for SCI Toolkit </p>
   
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
