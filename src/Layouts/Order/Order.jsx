import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Cover from "../Shared/Cover/Cover";
import orderImg from '../../assets/shop/banner2.jpg'
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category)
  console.log(category);
  console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
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
        <TabList className="flex gap-4 mx-auto mb-6 w-max">
          <Tab>Salads</Tab>
          <Tab>pizzas</Tab>
          <Tab>soups</Tab>
          <Tab>desserts</Tab>
          <Tab>drinks</Tab>
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
