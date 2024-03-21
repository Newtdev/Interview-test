import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
interface InputFieldProps {
  label?: string;
  type?: string;
  helpertext?: string;
  placeholder?: string;
  password?: boolean;
}

const CustomPhoneInput: React.FC<InputFieldProps> = (props) => {
	const { label, placeholder } = props;
	const [isFocus, setIsFocus] = useState(false);
	// console.log(props);

	return (
		<div className="w-full ">
			{label ? (
				<label className="capitalize" htmlFor={label}>
					{label}
				</label>
			) : null}

			<br />
			<span className="text-[12px]">{placeholder || "Number"}</span>
			<PhoneInput
				// inputClassName={`outline-none bg-inherit rounded w-full p-2`}
				placeholder={placeholder || "Enter phone number"}
				inputStyle={{ width: "100%", height: 47, borderColor: "black" }}
				countrySelectorStyleProps={{
					style: { height: 47 },
					flagStyle: { height: 47 },
					buttonStyle: { height: 47, borderColor: "black" },
				}}
				style={{ width: "100%", borderRadius: 12 }}
				//   onFocus={(e) => {
				//     setIsFocus(true);
				//   }}
				//   onBlur={(e) => {
				//     setIsFocus(false);
				//   }}
				{...props}
			/>
			{props?.helpertext ? (
				<>
					<label className="text-[10px] text-red-600">
						{props?.helpertext}
					</label>{" "}
					<br />
				</>
			) : null}
		</div>
	);
};

export default CustomPhoneInput;
