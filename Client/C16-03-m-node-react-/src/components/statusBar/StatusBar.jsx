import { ProgressBar, Step } from "react-step-progress-bar";
import Warehouse from "../icons/Warehouse";
import InProgress from "../icons/InProgress";
import InTransit from "../icons/InTransit";
import Delivered from "../icons/Delivered";

import "react-step-progress-bar/styles.css";

const StatusBar = ({ initialStatus = {} }) => {
  const getProgress = () => {
    switch (initialStatus.product?.status) {
      case "In Warehouse":
        return 0;
      case "In Progress":
        return 33;
      case "In Transit":
        return 66;
      case "Delivered":
        return 100;
      case "Canceled":
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div className="p-4 w-full md:w-3/4 lg:w-2/3  mx-auto min-w-sm bg-Amethyst rounded-lg">
      <h2 className=" min-[320px]:text-[10px] sm:text-xs lg:text-lg  text-center mt-4 font-bold text-white  w-fit mx-auto pb-12">
        Envío Nro. {initialStatus.product?._id}
      </h2>
      <div className="w-full relative px-10">
        <ProgressBar
          percent={getProgress()}
          filledBackground="#8BEA00"
          height={15}
        >
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                } relative`}
              >
                <Warehouse />
                <span className="min-[320px]:text-[10px] text-center absolute inset-0 top-9 w-[130px] -left-[105%] sm:text-xs lg:text-md mt-4 text-white font-semibold">
                  En Almacén
                </span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                }  absolute`}
              >
                <InProgress />
                <span className=" min-[320px]:text-[10px] absolute text-center inset-0 top-9 w-[130px] -left-[110%] sm:text-xs lg:text-md mt-4 text-white font-semibold">
                  En Progreso
                </span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                }  absolute`}
              >
                <InTransit />
                <span className=" min-[320px]:text-[10px] sm:text-xs text-center absolute inset-0 top-9 w-[130px] -left-[94%] lg:text-md mt-4 text-white font-semibold">
                  En Tránsito
                </span>
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished }) => (
              <div
                className={`step ${
                  accomplished ? "accomplished" : ""
                }  absolute`}
              >
                <Delivered />
                <span className="min-[320px]:text-[10px] absolute text-center inset-0 top-9 w-[130px] -left-[96%] sm:text-xs lg:text-md  mt-4 text-white font-semibold">
                  Entregado
                </span>
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
};

export default StatusBar;
