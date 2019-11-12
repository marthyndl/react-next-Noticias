import React from 'react'
import Header from '../components/Header';
import { Layout, ErrorContainer } from '../styledComponents/GeneralStyled.js';

function Error({ statusCode }) {
  return (
    <Layout>
      <Header />
      <ErrorContainer>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
      </ErrorContainer>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error