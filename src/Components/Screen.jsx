import preview from "../assets/images/preview.png";
import { IoMdLock } from "react-icons/io";

const Screen = () => {
  return (
    <div className="flex flex-col w-full h-screen px-[10%] bg-[#DAE5F5]">
      <div className="flex flex-col flex-grow items-center justify-center gap-5">
        <img className="w-1/2 h-auto" src={preview} />
        <h1 className="text-5xl leading-8 tracking-wider font-roboto font-bold">
          Pocket Notes
        </h1>
        <p className="font-normal font-roboto text-xl text-center">
          Send and receive messages without keeping your phone online. <br />{" "}
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="flex gap-1 justify-center pb-5">
        <IoMdLock className="text-lg self-center" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
};

export default Screen;
