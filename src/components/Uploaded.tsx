"use client";

import Image from "next/image";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Uploaded({ imgUrl }: { imgUrl: string }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    const selectedText = inputRef?.current?.value;

    if (!selectedText) return;

    navigator.clipboard
      .writeText(selectedText)
      .then(() => {
        toast.success("Copied", { duration: 1000 });
      })
      .catch(() => {
        toast.error("Error", { duration: 1000 });
      });
  };

  return (
    <div className="w-[400.36px] h-[454.96px] rounded-2xl shadow-xl bg-white">
      <div className="m-6 flex flex-col gap-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 h-10 text-green-600"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>

        <h2 className="text-center text-xl">Uploaded Successfully!</h2>

        <Image
          src={imgUrl}
          alt="image uploaded"
          className="w-[338px] h-[224.4px] rounded-xl"
          width={400}
          height={400}
        />

        <div className="flex bg-gray-50 border rounded-lg w-[338px] h-[34px] justify-between">
          <input
            type="text"
            value={imgUrl}
            ref={inputRef}
            readOnly
            autoComplete={imgUrl}
            className="px-1 bg-transparent text-xs flex-auto text-ellipsis text-gray-500"
          />
          <button
            className="bg-blue-500 text-white rounded-lg"
            onClick={() => {
              handleCopy();
            }}
          >
            <p className="text-xs px-3 py-2">Copy Link</p>
          </button>
          <Toaster />
        </div>
      </div>
    </div>
  );
}
