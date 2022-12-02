import React from "react";

import DataInvoice from "./components/InvoiceData/invoiceData.server";
import DateInvoice from "./components/InvoiceDate/InvoiceDate.server";
import TableInvoice from "./components/TableInvoice/tableInvoice.server";
import styles from "./styles.module.css";

interface ICreateInvoice {
	name ?: string;
}

const CreateInvoice: React.FC<ICreateInvoice> = ({

}) => {
	return (
		<form>
			<article className={styles.invoice_create_seccion}>
				<div className={styles.card}>
					<div className={styles.info_invoice}>
						<div className={styles.info_invoice_data}>
							<DataInvoice />
						</div>
						<div className={styles.info_invoice_date}>
							<fieldset className={styles.figure_invoice}>
								<input
									type="file"
									accept="image/*"
									id="logoImg"
									className={styles.figure_input}
								/>
								<label htmlFor="logoImg" className={styles.figure_text}>
									Drag &amp; drop a logo file or click to upload
								</label>
							</fieldset>
							<DateInvoice />
						</div>
					</div>
					<TableInvoice id="table" />
				</div>
			</article>
		</form>
	);
}
export default CreateInvoice;
