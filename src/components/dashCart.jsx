import { Ellipsis } from "lucide-react";
import PropTypes from "prop-types";


export function DashCart({ label, count ,isLoading, error}) {

    if (isLoading) {
        return (
            <div className="rounded-lg odd:bg-sky even:bg-blue p-4 flex-1 min-w-[130px]">
                <div className=" animate-spin w-[20px] h-[20px] border-4 border-gray-100 border-t-blue-500 rounded-full"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="w-full min-h-screen  bg-white p-4 rounded-lg flex justify-center items-center">
                <p className="text-red-500 text-[18px] text-center mt-5">Cnnot get Teachers ! Please try again later.</p>
            </div>

        );
    }
    // ---------------------
    return (
        <div className="rounded-lg odd:bg-sky even:bg-blue p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
                    2024/25
                </span>
                <Ellipsis color="white" />
            </div>
            <h1 className="text-2xl font-semibold my-2">{count}</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{label}</h2>
        </div>
    );
}

DashCart.propTypes = {
    label: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    isLoading: PropTypes.bool,
    error: PropTypes.object,
};

