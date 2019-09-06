import * as React from 'react'
import Link from 'gatsby-link'

import DefaultLayout from '../components/Layout';

const SecondPage = () => (
  <DefaultLayout>
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </DefaultLayout>
)

export default SecondPage
