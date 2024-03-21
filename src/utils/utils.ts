import { FormikValues } from "formik";
export function formatNumber(n: string) {
	return n
		.toString()
		.replace(/\D/g, "")
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getTextFieldFormikProps = (formik: FormikValues, key: string) => {
	const fieldProps = formik.getFieldProps(key);
	return {
		id: key,
		name: key,
		value: fieldProps?.value || "",
		helpertext: !!formik.touched && formik.errors[key],
		...fieldProps,
	};
};

export function isPlainObject(value: any) {
	return value?.constructor === Object;
}
export function objectToFormData(data: any) {
	const fd = new FormData();
	for (const key in data) {
		if (Array.isArray(data[key])) {
			for (const arrData of data[key]) {
				fd.append(key, arrData);
			}
		} else {
			fd.set(key, data[key]);
		}
	}
	return fd;
}

export function normalizeArray(
	array: any[],
	options: {
		getKey?: (arg: any) => string;
		getValue?: (arg1: any, arg2: any) => any;
	} = {}
) {
	const { getKey = ({ id }) => id, getValue = (value) => value } = options;
	return array?.reduce((acc, curr) => {
		const key = getKey(curr);
		acc[key] = getValue(curr, acc[key]);
		return acc;
	}, {});
}

// export function formatNumberToCurrency(number = "", decimalPlace = false) {
// 	let value = number.toString();
// 	const decimalPosition = value.indexOf(".");
// 	if (decimalPosition >= 0) {
// 		const leftSide = formatNumber(value.substring(0, decimalPosition));
// 		let rightSide = formatNumber(value.substring(decimalPosition));
// 		if (decimalPlace) {
// 			rightSide += "00";
// 		}

// 		rightSide = rightSide.substring(0, 2);
// 		value = leftSide + "." + rightSide;
// 	} else {
// 		value = formatNumber(value);
// 		if (decimalPlace) {
// 			value += ".00";
// 		}
// 	}
// 	return value;
// }

// Function to format a number as a currency string using the Intl API.
export const formatCurrency = (number: number) => {
	// Check if the number is valid.
	if (typeof number !== "number") {
		return;
	}

	// Create a new Intl NumberFormat object.
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	// Format the number using the Intl API.
	const formattedNumber = formatter.format(number);

	// Return the formatted currency string.
	return formattedNumber;
};