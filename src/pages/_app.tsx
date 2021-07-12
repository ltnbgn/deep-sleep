import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import './app.css'

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>Гүн нойр</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
