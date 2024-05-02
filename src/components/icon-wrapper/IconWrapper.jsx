import "./iconwrapper.scss";

const IconWrapper = ({ children, ...props }) => {
    return (
        <div {...props} className="iconWrapper">
            {children}
        </div>
    );
};

export default IconWrapper;
