import React from "react";
import Link from "next/link";

export default function Nav (){
    return (
        <div>
            <nav className="bg-gray-50 mx-2 my-1 rounded-sm">
        <ul className="flex  justify-center font font-noto-serif">
          <li className="mx-2  hover:text-[#885f58] relative after:absolute after:bg-[#885f58] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            選取病人病歷
          </li>
          <li className="mx-2 hover:text-[#885f58] relative after:absolute after:bg-[#885f58] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            比對系統
          </li>
          <li className="mx-2 hover:text-[#885f58] relative after:absolute after:bg-[#885f58] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            檢查表系統
          </li>
          <li className="mx-2 hover:text-[#885f58] relative after:absolute after:bg-[#885f58] after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
            查詢系統
          </li>
        </ul>
      </nav>
        </div>
    );
}