import React from 'react'
import Head from 'next/head'

import MainScreen from "../components/MainScreen"

export default function Index() {
  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="personal gallery built on Next.js"
        />

        <link rel="manifest" href="manifest.json" />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

        <title>Rabbit Hole: Personal Gallery</title>
      </Head>
      <MainScreen />
    </React.Fragment>
  )
}