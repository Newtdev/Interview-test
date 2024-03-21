import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComp({
  selected,
  onSelect,
  placeholder,
  disabled = false,
}: any) {
  return (
    <div className="w-full ">
      <DatePicker
        className="w-full px-20 py-3 border rounded-md border-gray-dark"
        selected={selected}
        onChange={onSelect}
        dateFormat={"dd-M-yyyy"}
        placeholderText={placeholder}
        disabled={disabled}

        // showIcon
        // icon="fa fa-calendar"
      />
    </div>

    // <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}
