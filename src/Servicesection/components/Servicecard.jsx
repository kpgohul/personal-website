
export default function Servicecard(props){
  // eslint-disable-next-line react/prop-types
  const{image,title,description }=props;
    return(
        <>
        <div className="card bg-base-100 w-auto h-auto  shadow-xl m-3 ">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="w-20" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    
  </div>
</div>
        </>
    )
}
