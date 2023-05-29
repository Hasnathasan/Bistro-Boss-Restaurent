import Cover from "../../Shared/Cover/Cover";
import menuCover from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import ShowMenuByCategory from "../ShowMenuByCategory/ShowMenuByCategory";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzasImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Menu = () => {
  const {user} = useContext(AuthContext)
  const [menus] = useMenu();
  if(!user){
    return <>
     <h1>Loading...</h1>
    </>
  }
  const offers = menus.filter((menu) => menu.category === "offered");
  const desserts = menus.filter((menu) => menu.category === "dessert");
  const salads = menus.filter((menu) => menu.category === "salad");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const soups = menus.filter((menu) => menu.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menuCover}
        header={"OUR MENU"}
        subTitle={"Would you like to try a dish?"}
      ></Cover>
      <div className="my-32">
        <SectionTitle
          title={"Today's offer"}
          subTitle={"Don't miss"}
        ></SectionTitle>
        <ShowMenuByCategory items={offers}></ShowMenuByCategory>
        <ShowMenuByCategory
          items={desserts}
          img={dessertImg}
          header={"desserts"}
          subTitle={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></ShowMenuByCategory>
        <ShowMenuByCategory
          items={salads}
          img={saladImg}
          header={"salads"}
          subTitle={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></ShowMenuByCategory>
        <ShowMenuByCategory
          items={pizzas}
          img={pizzasImg}
          header={"pizzas"}
          subTitle={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></ShowMenuByCategory>
        <ShowMenuByCategory
          items={soups}
          img={soupImg}
          header={"soups"}
          subTitle={
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></ShowMenuByCategory>
      </div>
    </div>
  );
};

export default Menu;
