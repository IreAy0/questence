
const Button = ({ variant = 'filled', icon, children, onClick, className = '',  minWidth = '102px',
  maxWidth = '100%'}) => {
    const baseClass = 'px-4 py-2 rounded-[15px] text-sm font-bold flex items-center justify-center transition-all duration-200';
    const variantClass = variant === 'outline' 
        ? 'border border-primary bg-transparent hover:bg-primary hover:text-white' 
        : 'bg-primary text-white hover:opacity-80';

    return (
        <button 
            onClick={onClick} 
            className={`${baseClass} ${variantClass} ${className}`}
            style={{ minWidth, maxWidth }}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
