import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="my-32 py-20 bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage: `linear-gradient(45deg, #000000b0, #000000b0), url(${featuredImg})`,
      }}
    >
      <SectionTitle
        title="Featured Section"
        subTitle="Check it out"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center px-20">
        <div className="flex justify-center items-center">
          <img className="w-[200px] md:w-[450px]" src={featuredImg} alt="" />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl">March 20, 2023</h3>
          <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn text-white btn-outline">Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
