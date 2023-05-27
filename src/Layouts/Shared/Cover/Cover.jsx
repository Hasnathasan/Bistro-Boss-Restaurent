const Cover = ({ img, header, subTitle }) => {
  return (
    <div
      className="hero h-[600px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
          <div className="hero-content bg-black bg-opacity-50 w-3/4 py-20 text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl uppercase font-bold">{header}</h1>
              <p className="mb-5">{subTitle}</p>
            </div>
          </div>
    </div>
  );
};

export default Cover;
