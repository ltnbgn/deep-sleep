import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import './index.css'

export default function MyApp(props: AppProps) {
	const { Component, pageProps } = props

	return (
		<>
			<Head>
				<title>Гүн нойр</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	)
}
