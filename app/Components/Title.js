
function Title({children, className})
{
    return(
        <p className={` text-[#d4d4d4] font-courier text-2xl font-bold ${className}`}>{children}</p>
    );
}

export default Title; 