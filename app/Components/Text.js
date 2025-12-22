

function Text({children, className})
{
    return(
        <p className={`${className} text-primary font-courier text-xl font-bold`}>{children}</p>
    );
}

export default Text; 