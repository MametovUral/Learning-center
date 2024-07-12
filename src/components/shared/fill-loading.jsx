import { Spinner } from "flowbite-react";

function FillLoading() {
  return (
    <div className="w-full h-full  absolute inset-0 flex justify-center bg-[#00000083] items-center opacity-2 z-50 ">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}

export default FillLoading;
