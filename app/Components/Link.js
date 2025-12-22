function Link({label, link, classname}){
    return(
        <a href={link} className={`text-secondary font-courier 
        text font-bold underline ${classname}`}>{label}</a>
    );
}

export default Link;