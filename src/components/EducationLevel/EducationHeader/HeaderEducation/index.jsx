import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
function HeaderEducation({ option, onClick ,isSelected ,imageToShow }) {
    const router =useRouter()
  return (
    <div onClick={onClick} className="text-center">
     <Link href={option.url}> <img
        src={imageToShow}
        alt={option.alt}
        width={100}
        height={100}
        className="mx-auto"
      />
      </Link>
      <p className={`mt-1 ${router.pathname === "/college" ? "text-white" : router.pathname === "/courses" ? "text-white": router.pathname === "/profile" ? "text-white":"text-black"}  text-sm`}>{option.label}</p>
    </div>
  );
}

export default HeaderEducation;