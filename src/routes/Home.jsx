import React from 'react'
import { Jumbotron } from '../components/Jumbotron/jumbotron'
import { CatalogButton } from '../components/CatalogButton/CatalogButton'
import AboutUs from '../components/AboutUS/AboutUs'


export const Home = () => {
  return (
    <div>
      <AboutUs/>
     <Jumbotron/>
     <CatalogButton/>
    </div>
  )
}


