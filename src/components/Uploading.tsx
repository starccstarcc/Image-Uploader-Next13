import { BarLoader } from "react-spinners";

export default function Uploading() {
  return (
    <div className="w-[400.36px] h-[143.57px] shadow-xl rounded-2xl bg-white">
      <div className="m-8 flex flex-col gap-7">
        <p>Uploading...</p>

        <BarLoader
          height={6}
          width={330}
          color="#2F80ED"
        />
      </div>
    </div>
  );
}
