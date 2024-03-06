import img from "../../assets/worker.jpg";

export const WaitBackground = ({ title, paragraph }) => {
  return (
    <div className="flex flex-col p-6 justify-center items-center space-y-8">
      <h2 className="text-white text-center sm:text-sm lg:text-lg font-bold ml-11 ">
        {title}
      </h2>
      <p className="flex flex-col p-6 justify-center items-center space-y-8 text-white text-center font-semibold ">
        {paragraph}
      </p>
      <div className="sm:w-[250px]  lg:w-[450px] ">
        <img
          className="rounded-[24px] object-cover"
          src={img}
          alt="trabajador"
        />
      </div>
    </div>
  );
};
