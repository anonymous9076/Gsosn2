// src/components/Container.jsx
const Container = ({ children, className = "" }) => {
    return (
        <div className={`mx-auto px-4 md:px-8 lg:px-8 xl:px-20 py-5  ${className}`}>
            {children}
        </div>
    );
};

export default Container;