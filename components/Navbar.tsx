import React from "react";
import {
  HomeIcon,
  DocumentMagnifyingGlassIcon,
  PhotoIcon,
  ArrowLeftOnRectangleIcon,
  GlobeEuropeAfricaIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { menuModel } from "../model/menuModel";
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

type BottomNavbarProps = {
  children: React.ReactNode;
};

function BottomNavbar({ children }: BottomNavbarProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const bottomMenuArray: menuModel[] = [
    {
      title: "Home",
      icon: <HomeIcon className="w-8 h-8 sm:w-12 sm:h-12" />,
      path: "/",
    },
    {
      title: "File manager",
      icon: <DocumentMagnifyingGlassIcon className="w-8 h-8 sm:w-12 sm:h-12" />,
      path: "/files",
    },
    {
      title: "Gallery",
      icon: <PhotoIcon className="w-8 h-8 sm:w-12 sm:h-12" />,
      path: "/gallery",
    },
    {
      title: "Browser",
      icon: <GlobeEuropeAfricaIcon className="w-8 h-8 sm:w-12 sm:h-12" />,
      path: "/browser",
    },
  ];

  const formatedDate = dayjs().format("DD. MM. YYYY");

  const checkIfRouteIsActive = (routerPath: string, itemLink: string) => {
    if (routerPath === itemLink) return true;
    else {
      const splitArray = itemLink.split("/");

      if (splitArray[1].length) {
        if (routerPath.includes(`${splitArray[1]}/`)) return true;
      } else return false;
    }
  };

  const signOutHandler = () => {
    dispatch(authActions.logOut());
  };

  console.log(router.asPath);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-violet-900">
      <div className="absolute top-5 left-8 text-xl">{formatedDate}</div>
      <div className="absolute flex top-5 right-8 text-xl space-x-5">
        <CameraIcon
          className={`h-8 w-8 hover:text-slate-400 cursor-pointer  ${
            router.asPath === "/camera" ? "text-black" : ""
          }`}
          onClick={() => router.push("/camera")}
        />
        <ArrowLeftOnRectangleIcon
          className="h-8 w-8 hover:text-slate-400 cursor-pointer"
          onClick={signOutHandler}
        />
      </div>
      {children}
      <section className="block fixed inset-x-0 bottom-0 z-10 bg-slate-600 opacity-40 shadow p-2 text-black">
        <div className="flex flex-row justify-around">
          {bottomMenuArray.map((item: menuModel, i: number) => (
            <Link href={item.path} key={i}>
              <div
                className={`w-16 sm:w-28 cursor-pointer py-3 sm:py-0 flex-col justify-center flex items-center hover:text-white hover:shadow-xl hover:shadow-black hover:bg-black hover:rounded-xl group ${
                  checkIfRouteIsActive(router.asPath, item.path)
                    ? "text-white bg-black shadow-xl shadow-black rounded-xl "
                    : "text-slate-100"
                }`}
              >
                {item.icon}
                <span className="hidden sm:block">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BottomNavbar;
