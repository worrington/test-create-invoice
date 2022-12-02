import React from "react";

import Input from "../../../../components/Input/input.server";
import styles from "./styles.module.css";

const DateInvoice: React.FC = () => 
<div className={styles.invoice_info_date}>
	<div className={styles.info_date}>
		<Input
			type={"text"}
			placeholder={""}
			value={"Invoice No"}
			name={"invoiceNo"}
			disabled
			id={"invoiceNo"}
		/>
		<label htmlFor="invoiceNo">Invoice No</label>
		<Input
			type={"number"}
			placeholder={"####"}
			value={""}
			name={"invoiceNoValue"}
			id={"invoiceNoValue"}
		/>
		<label htmlFor="invoiceNoValue">Invoice No Value</label>
	</div>
	<div className={styles.info_date}>
		<Input
			type={"text"}
			placeholder={""}
			value={"Invoice Date"}
			name={"invoiceDate"}
			id={"invoiceDate"}
		/>
		<label htmlFor="invoiceDate">Invoice Date</label>
		<Input
			type={"date"}
			placeholder={""}
			value={""}
			name={"invoiceDateValue"}
			id={"invoiceDateValue"}
		/>
		<label htmlFor="invoiceDateValue">Invoice Date Value</label>
	</div>
	<div className={styles.info_date}>
		<Input
			type={"text"}
			placeholder={""}
			value={"Due Date"}
			name={"DueDate"}
			id={"DueDate"}
		/>
		<label htmlFor="DueDate">Due Date</label>
		<Input
			type={"date"}
			placeholder={""}
			value={""}
			name={"DueDateValue"}
			id={"DueDateValue"}
		/>
		<label htmlFor="DueDateValue">DueDate Value</label>
	</div>
</div>;

export default DateInvoice;
