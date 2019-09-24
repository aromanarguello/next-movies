import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

const Header = styled.header`
  border: 1px solid red;
  width: 100%;
  height: 50px;
`

const Main = styled.main``

const Footer = styled.footer``

const Layout = ({ children, title = 'Default title' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <style jsx global>{`
      body { 
        width: 100%;
        padding: 0;
        margin: 0;
      }
    `}</style>
    <Header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |
        <Link href="/search">
          <a>Search</a>
        </Link>
      </nav>
    </Header>
    <Main>{children}</Main>
    <Footer>Footer</Footer>
  </>
)

Layout.displayName = "Layout"

export default Layout