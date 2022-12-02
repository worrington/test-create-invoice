import type { NextPage } from "next";
import React, { Suspense } from 'react';

import CreateInvoice from "../components/CreateInvoice/createInvoice.server";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<main>
			<section className={styles.section_header}>
				<h1>
					Invoice Template Generator
				</h1>
				<h2>
					Fill in your business details in the invoice template below to
					create a professional invoice for your customers.
				</h2>
			</section>
			<Suspense>
				<CreateInvoice />
			</Suspense>
		</main>
	)
}

export default Home;


export async function getServerSideProps() {
	return {
		props: {
			id: "1",
		}
	}
}