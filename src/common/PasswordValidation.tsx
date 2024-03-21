const PasswordValidationComp = ({ password = "" }: { password: string }) => {
	const lowercaseRegex = /^(?=.*[a-z]).+$/;
	const upperCaseRegex = /^(?=.*[A-Z]).+$/;
	const atLeastOneDigitRegex = /\d+/;
	const atLeastOneSymbolRegex = /[\W_]+/;

	const passwordValidation = [
		{
			id: 1,
			validator: "- Minimum 1 upper-case character (A-Z)",
			color: upperCaseRegex.test(password) ? "text-green-600" : "black",
		},
		{
			id: 2,
			validator: "- Minimum 1 lower-case character (a-z)",
			color: lowercaseRegex.test(password) ? "text-green-600" : "black",
		},
		{
			id: 3,
			validator: "- Minimum 1 digit (0-9)",
			color: atLeastOneDigitRegex.test(password) ? "text-green-600" : "black",
		},
		{
			id: 4,
			validator: "- Minimum 1 special character (!,@,#,$)",
			color: atLeastOneSymbolRegex.test(password) ? "text-green-600" : "black",
		},
		{
			id: 5,
			validator: "- Minimum 8 characters or more",
			color: password.length >= 8 ? "text-green-600" : "black",
		},
	];

	return (
		<div className="mb-10">
			<h4 className="mt-4 mb-4 font-bold text-base">
				Make sure your password has:
			</h4>
			{passwordValidation.map((v: any) => (
				<div className="my-2">
					<p className={`${v.color} text-gray-dark text-sm`} key={v.id}>
						{v.validator}
					</p>
				</div>
			))}
		</div>
	);
};

export default PasswordValidationComp;
