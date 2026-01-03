

export default function CircleButton({id, onClick, image, className}) {
  return (

    <div>
      <img onClick={onClick} className={`rounded-full aspect-squar ${className}`} src={image}></img>
    </div>
      
  );
}