import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ShowMenus from "../../Shared/ShowMenus/ShowMenus";
import useMenu from "../../../hooks/useMenu";

const MenuSection = () => {
  const [menus] = useMenu();
  const populars = menus.filter((menu) => menu.category === "popular");
  return (
    <div className="my-32">
      <SectionTitle
        title="From our menu"
        subTitle="Check it out"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
        {populars.map((menu) => (
          <ShowMenus key={menu._id} menu={menu}></ShowMenus>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
