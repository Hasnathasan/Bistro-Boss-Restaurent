import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";
import orderImg from '../../assets/shop/banner2.jpg'
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
        <Cover img={orderImg} header="Order Food" subTitle="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quos delectus porro doloribus ut. Tempora reprehenderit"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab><button>Title 1</button></Tab>
          <Tab><button>Title 2</button></Tab>
          <Tab><button>Title 3</button></Tab>
        </TabList>
        <TabPanel>hi</TabPanel>
        <TabPanel>by</TabPanel>
        <TabPanel>hy</TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
