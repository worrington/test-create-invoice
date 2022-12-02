import React, {useState} from "react";

import styles from "./styles.module.css";

interface IInput {
	type: string;
	placeholder: string;
	fontLg?: boolean;
	required?: boolean;
	value: string;
	name: string;
	disabled?: boolean;
	id: string;
	onChange?: () => void;
}

const Input: React.FC<IInput> = ({
	type,
	placeholder,
	required,
	disabled,
	fontLg,
	value,
	name,
	id,
	onChange,
}) => {
	const [valueInit, setValueInit] = useState(value);

	const handleInput = ({target}:any) => {
		setValueInit(target.value);
		if (onChange) {
			onChange();
		}
	}

	return (
		<input
			className={`${styles.input} ${!fontLg ?  styles.input_size_md : styles.input_size_lg}`}
			type={type}
			placeholder={placeholder}
			required={required || false}
			name={name}
			value={valueInit}
			onChange={handleInput}
			disabled={disabled || false}
			id={id}
		/>
	);
}
export default Input;
