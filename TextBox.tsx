import React from "react";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
}

const TextBox = ({
  value,
  onChange,
  placeholder = "Type your content",
}: Props) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "0.5rem", width: "300px" }}
    />
  );
};

export default TextBox;
