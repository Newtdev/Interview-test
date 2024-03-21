import React from "react";

export default function DataList({ placeholder, onChange, data, name }: any) {
  return (
    <div>
      <input
        className="w-full px-3 py-3 border rounded-md border-gray-dark"
        list={name}
        name={name}
        id="item"
        onChange={onChange}
        placeholder={placeholder}
      />
      <datalist id={name}>
        {data.map((d: string) => (
          <option value={d}>{d.toLowerCase()}</option>
        ))}
      </datalist>
    </div>
  );
}

export function SelectInput({ data, placeholder, children, ...rest }: any) {
  return (
    <select
      className="w-full px-3 py-4 border rounded-md border-gray-dark text-gray-dark"
      {...rest}
    >
      <option selected>{placeholder}</option>
      {children}
    </select>
  );
}
