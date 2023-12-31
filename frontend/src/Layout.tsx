import React from 'react'
import { Navbar } from './Components'

const Layout = (props: { children: React.ReactNode }) => (
  <>
    <header>
      <nav className='bg-slate-200 flex p-4'>
        <Navbar />
      </nav>
    </header>
    <main className='container mx-4'>
      { props.children }
    </main>
  </>
)

export default Layout
