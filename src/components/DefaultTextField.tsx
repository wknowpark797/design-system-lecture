import { useState } from 'react';
import ErrorMessage from './ErrorMessage';
import IconButton from './IconButton';

interface IDefaultTextFieldProps {
	value: string;
	placeholder: string;
	iconAlt: string;
	iconPath: string;
	errorMessage: string;
	isError: boolean;
	onIconClick: () => void;
	onChange: () => void;
}

export default function DefaultTextField({
	value,
	placeholder,
	iconAlt,
	iconPath,
	errorMessage,
	isError,
	onIconClick,
	onChange,
}: IDefaultTextFieldProps) {
	const [isFocused, setIsFocused] = useState(false);
	const borderColor = isFocused ? 'border-secondary' : !value ? 'border-mono300' : 'border-primary';

	return (
		<div>
			<div
				className={`text-primary border-b ${borderColor}`}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			>
				<input type='text' value={value} placeholder={placeholder} onChange={onChange} className='outline-none' />
				{!!value && <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />}
			</div>

			{isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</div>
	);
}
