

export default function CircleButton({designAdjustments, onClick, image, className}) {
  return (

    <div className={`${className} flex items-center justify-center aspect-square rounded-full`}>
      <img onClick={onClick} className={` ${designAdjustments}`} src={image}></img>
    </div>
      
  );
}