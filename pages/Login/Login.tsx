import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <div>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center ">
        <div className="bg-gray-100 flex rounded-xl shadow-lg max-w-3xl ">
          <div className=" w-80 p-6 ">
            <h1 className="text-xl font-bold text-black">電子病歷系統</h1>
            <p className="my-4 text-sm font-mono text-gray-700">HI doctor! please login</p>

            <form className="flex flex-col gap-4 ">
              <input
                className="p-2 mt-6 rounded-xl border"
                type="text"
                name="Account"
                placeholder="Account"
              ></input>
              <div className="relative">
                <input
                  className="p-2 mt-4 rounded-xl border w-full"
                  type="password"
                  name="Password"
                  placeholder="Password"
                ></input>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="gray"
                  className="bi bi-eye absolute top-1/2 right-3 "
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <a
                href="#"
                className="font-mono text-sm font-medium text-indigo-600 hover:text-indigo-500 text-right"
              >
                Forget your password?
              </a>
              
              <button className="bg-[#002D74] rounded-xl font-mono text-white py-2" >
               <Link href="/Homepage/Homepage"> Login</Link>
              </button>
            </form>
          </div>

          <div className="sm:block hidden w-1/2 bg-center bg-contain">
            <Image
              className="rounded-xl opacity-80"
              src={require("../../public/login.jpg")}
              alt="logo"
              width={300}
              height={600}
            ></Image>
          </div>
        </div>
      </section>
    </div>
  );
}
