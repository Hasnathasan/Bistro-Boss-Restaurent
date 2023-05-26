const FoodCard = ({food}) => {
    const {name, recipe, image, price} = food;
  return (
    <div className="card relative card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
        <span className="badge absolute top-2 right-3 badge-lg rounded-0 rounded">${price}</span>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
