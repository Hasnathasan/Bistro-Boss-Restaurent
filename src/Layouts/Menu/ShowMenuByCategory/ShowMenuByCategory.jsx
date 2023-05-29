import ShowMenus from "../../Shared/ShowMenus/ShowMenus";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const ShowMenuByCategory = ({ items, img, header, subTitle }) => {
  return (
    <div className="my-44">
      {header && (
        <div className="mb-20">
          <Cover img={img} header={header} subTitle={subTitle}></Cover>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
        {items.map((menu) => (
          <ShowMenus key={menu._id} menu={menu}></ShowMenus>
        ))}
      </div>
      <Link to={`/order/salads`}>
        <button className="btn btn-outline mt-5 mx-auto block border-0 border-b-2">
          Order your favorite food
        </button>
      </Link>
    </div>
  );
};

export default ShowMenuByCategory;
