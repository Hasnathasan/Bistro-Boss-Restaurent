import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Cover from "../Shared/Cover/Cover";
import orderImg from '../../assets/shop/banner2.jpg'
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menus] = useMenu();
  const desserts = menus.filter((menu) => menu.category === "dessert");
  const salads = menus.filter((menu) => menu.category === "salad");
  const pizzas = menus.filter((menu) => menu.category === "pizza");
  const soups = menus.filter((menu) => menu.category === "soup");
  const drinks = menus.filter((menu) => menu.category === "drinks");
  return (
    <div>
        <Cover img={orderImg} header="Order Food" subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quos delectus porro doloribus ut. Tempora reprehenderit"></Cover>
      <div className="my-32">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="border-none flex gap-4 mx-auto mb-6 w-max">
          <Tab><button className="btn btn-info">Salad</button></Tab>
          <Tab><button className="btn btn-info">Pizza</button></Tab>
          <Tab><button className="btn btn-info">Soup</button></Tab>
          <Tab><button className="btn btn-info">Desserts</button></Tab>
          <Tab><button className="btn btn-info">Drinks</button></Tab>
        </TabList>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-10">
            {salads.map(salad => <FoodCard key={salad._id} food={salad}></FoodCard>)}
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-10">
            {pizzas.map(pizza => <FoodCard key={pizza._id} food={pizza}></FoodCard>)}
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-10">
            {soups.map(soup => <FoodCard key={soup._id} food={soup}></FoodCard>)}
        </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-10">
            {desserts.map(dessert => <FoodCard key={dessert._id} food={dessert}></FoodCard>)}
            </div>
        </TabPanel>
        <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-20 gap-10">
            {drinks.map(drink => <FoodCard key={drink._id} food={drink}></FoodCard>)}
            </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  );
};

export default Order;
