import React from "react";

import InputDataCompany from "../../../../core/constants/InputDataCompany.constants";
import InputDataClient from "../../../../core/constants/InputDataClient.constants";
import Input from "../../../../components/Input/input.server";

const DataInvoice: React.FC = () => <>
	<h2>Invoice</h2>
	<div>
		{InputDataCompany.map((item, _key) =>
			<fieldset key={_key}>
				<Input
					type={item.type}
					placeholder={item.placeHolder}
					fontLg={item.fontLg}
					required={item.required}
					value={item.value}
					name={item.name}
					id={item.name}
				/>
			</fieldset>)
		}
	</div>
	<div>
		{InputDataClient.map((item, _key) =>
			<fieldset key={_key}>
				<Input
					type={item.type}
					placeholder={item.placeHolder}
					fontLg={item.fontLg}
					required={item.required}
					value={item.value}
					name={item.name}
					id={item.name}
				/>
			</fieldset>)
		}
	</div>
</>;

export default DataInvoice;
