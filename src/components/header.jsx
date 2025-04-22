import { SearchBox } from "./search";

export function Header(){



    return (
        <div className="bg-white flex items-center justify-between px-4  h-15">
            <SearchBox/>
            <div className="flex items-center space-x-2 ">
                <div className="flex flex-col items-end text-gray-600  ">
                    <span className=" text-md hidden sm:block">Said Bzioui</span>
                    <span className=" text-sm -mt-1 hidden sm:block">Admin</span>
                </div>
                <div className="rounded-full">
                    <img src="../avatar.png" className="w-9 rounded-full"/>
                </div>
            </div>
        </div>
    )
}