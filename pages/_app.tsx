import type { AppProps } from "next/app"

import { Provider } from "react-redux";
import Head from "next/head";

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		//<Provider store={() => null}>
		<>
			<Head>
				<title>Invoice Template Generator</title>
				<meta
					name="description"
					content="Fill in your business details in the invoice template
					below to create a professional invoice for your customers." />
				<link rel="icon" href="" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
