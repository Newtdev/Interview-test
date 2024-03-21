import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

interface InputFieldProps {
  label?: string;
  type?: string;
  helpertext?: string;
  placeholder?: string;
  password?: boolean;
  showBreak?: boolean;
  editable?: boolean;
}

const CustomInputField: React.FC<InputFieldProps> = ({
  showBreak = true,
  ...props
}) => {
  const { label, type, password, placeholder, editable } = props;
  const [isFocus, setIsFocus] = useState(false);
  const [passwordState, setPasswordState] = useState(true);
  const [typePassword, setTypePassword] = useState("password");

  return (
		<div className="w-full ">
			{label ? (
				<label className="capitalize text-sm md:text-base " htmlFor={label}>
					{label}
				</label>
			) : null}

			{showBreak ? <br /> : null}
			<div
				className={`border h-10 md:h-14 mt-4 outline-none flex items-center rounded-lg w-full bg-inherit  ${
					!isFocus
						? "border-gray-dark"
						: props?.helpertext
						? "border-red-700"
						: " border-primary shadow-3xl"
				}`}>
				<input
					className={`outline-none h-full bg-inherit text-sm rounded placeholder:text-sm w-full p-3 `}
					{...props}
					type={type === "password" ? typePassword : type}
					onFocus={(e) => {
						setIsFocus(true);
					}}
					onBlur={(e) => {
						setIsFocus(false);
					}}
					placeholder={placeholder}
					disabled={editable}
				/>
				{password ? (
					<div
						className="px-2 cursor-pointer"
						onClick={() => {
							setPasswordState(!passwordState);
							typePassword === "password"
								? setTypePassword("text")
								: setTypePassword("password");
						}}>
						<div className="mr-4">
							{passwordState ? (
								<AiOutlineEyeInvisible className="w-6 h-6 text-gray-dark" />
							) : (
								<AiOutlineEye />
							)}
						</div>
					</div>
				) : null}
			</div>
			{props?.helpertext ? (
				<>
					<label className="text-[12px] text-red-700">
						{props?.helpertext}
					</label>{" "}
					<br />
				</>
			) : null}
		</div>
	);
};

export default CustomInputField;
