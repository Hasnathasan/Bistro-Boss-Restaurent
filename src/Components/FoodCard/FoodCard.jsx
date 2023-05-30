import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { name, recipe, image, price, _id } = food;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleAddCart = () => {
    if (user) {
      const cartItem = {foodId: _id, name, image, price, addedBy: user.email}
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Item added to cart successfully",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login NOW!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
        }
      });
    }
  };
  return (
    <div className="card relative card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <span className="badge absolute top-2 right-3 badge-lg rounded-0 rounded">
          ${price}
        </span>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddCart}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
