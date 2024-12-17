import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = (props) => {
    const { variant, className, children, iconAfter, ...rest } = props;

    return (
        <button className={twMerge("h-11 px-6 rounded-xl border border-orange-500 uppercase inline-flex items-center gap-2",
            variant === "primary" && "bg-orange-500 text-white",
            variant === "secondary" && "",
            variant === "text" && "h-auto px-0 border-none",
            className)} {...rest}>
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    );
};
Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "text"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    iconAfter: PropTypes.node,
};

Button.defaultProps = {
    variant: "primary",
    className: "",
    iconAfter: null,
};

export default Button;
