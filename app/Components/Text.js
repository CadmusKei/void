

function Text({children, className})
{
    return(
        <p className={`${className} text-primary font-courier text-xl `}>{children}</p>
    );
}

export default Text; 