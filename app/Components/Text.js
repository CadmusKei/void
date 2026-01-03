

function Text({children, className})
{
    return(
        <p className={`${className} text-primary font-courier text-lg `}>{children}</p>
    );
}

export default Text; 
