import { TextField } from "@material-ui/core";

const Input = ({
  type,
  label,
  name,
  value,
  autoComplete,
  className,
  onChange,
}) => {
  return (
    <>
      <TextField
        type={type}
        label={label}
        name={name}
        value={value}
        autoComplete={autoComplete}
        className={className}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
