const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor ? `bg-${backgroundColor}` : "bg-coral-red"
      } ${
        borderColor ? `border-${borderColor}` : "border-coral-red"
      } rounded-full ${textColor ? `border-${textColor}` : "text-white"}
        ${fullWidth && "w-full"}
      `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt={label} className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
