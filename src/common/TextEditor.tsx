import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


export const CustomToolbar = () => (
	<div id="toolbar">
		<select
			className="ql-header"
			defaultValue={""}
			onChange={(e) => e.persist()}>
			<option value="1" />
			<option value="2" />
			<option selected />
		</select>
		<button className="ql-bold" />
		<button className="ql-italic" />
		{/* <select className="ql-color">
			<option value="red" />
			<option value="green" />
			<option value="blue" />
			<option value="orange" />
			<option value="violet" />
			<option value="#d0d1d2" />
			<option selected />
		</select> */}
		{/* <button className="ql-insertStar">
			<CustomButton />
		</button> */}
	</div>
);

export const Editor = (props: {
	placeholder: string;
	className: string;
	handleChange: any;
}) => {
	return (
		<div className="text-editor  overflow-hidden rounded-lg">
			<CustomToolbar />
			<ReactQuill
				className={props.className}
				onChange={props.handleChange}
				placeholder={props.placeholder}
				modules={Editor.modules}
				formats={Editor.formats}
				theme={"snow"} // pass false to use minimal theme
			/>
		</div>
	);
};

Editor.modules = {
	toolbar: {
		container: "#toolbar",
		// handlers: {
		// 	insertStar: insertStar,
		// },
	},
	clipboard: {
		matchVisual: false,
	},
};

Editor.formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"indent",
	"link",
	"image",
	"color",
];

/*
 * PropType validation
 */

// class Editor extends React.Component {
// 	constructor(props: {} | Readonly<{}>) {
// 		super(props);
// 		this.state = { editorHtml: "" };
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(html: any) {
// 		this.setState({ editorHtml: html });
// 	}

// 	render() {
// 		return (
// 			<div className="text-editor">
// 				<CustomToolbar />
// 				<ReactQuill
// 					onChange={this.handleChange}
// 					placeholder={this.props.placeholder}
// 					modules={Editor.modules}
// 					formats={Editor.formats}
// 					theme={"snow"} // pass false to use minimal theme
// 				/>
// 			</div>
// 		);
// 	}
// }

export default function TextEditor() {
	return <div>TextEditor</div>;
}
