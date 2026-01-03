

export default function CircleButton({designAdjustments, onClick, image, className}) {
  return (

    <div className={`${className} flex items-center justify-center aspect-square rounded-full`}>
      <img onClick={onClick} className={` ${designAdjustments} rounded-full aspect-square`} src={image}></img>
    </div>
      
  );
}