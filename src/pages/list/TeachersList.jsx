import { useQuery } from "@tanstack/react-query";
import CostumAxios from "../../api/axios";
import { SearchBox } from "../../components/search";
import Table from "../../components/Table";
import { UserPlus, Eye, Trash } from "lucide-react";
import { useState } from "react";



const TeachersList = () => {
    const fetchTeachersList = async (page) => {
        const limit = 10;
        const response = await CostumAxios.get(`/teachers?_page=${page}&_limit=${limit}`);
        return {
            data: response.data,
            total: parseInt(response.headers["x-total-count"], 10),
        };
    };
    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: ["teachers", page],
        queryFn: () => fetchTeachersList(page),
        keepPreviousData: true,
        staleTime: 5000, 
    });

    if (isLoading) {
        return (
            <div className="w-full min-h-screen bg-white p-4 rounded-lg flex justify-center items-center">
                <div className=" animate-spin w-[50px] h-[50px] border-4 border-gray-100 border-t-blue-500 rounded-full"></div>
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

    const columns = [
        { header: "Info", accessor: "info" },
        { header: "Teacher ID", accessor: "teacherId", className: "hidden md:table-cell" },
        { header: "Subjects", accessor: "subjects", className: "hidden md:table-cell" },
        { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
        { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
        { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
        { header: "Actions", accessor: "action" },
    ];

    const renderRow = (item) => (
        <tr key={item.id} className="border-b border-gray-100 hover:bg-sky/10 text-gray-600 text-sm">
            <td className="px-4 py-2 flex items-center space-x-2">
                <img src={item.photo} className="w-8 h-8 rounded-full object-cover" />
                <div>
                    <h1>{item.name}</h1>
                    <h2 className="text-gray-400 ">{item.email}</h2>
                </div>
            </td>
            <td className="py-2 hidden md:table-cell">{item.teacherId}</td>
            <td className="py-2 hidden md:table-cell">{item.subjects && item.subjects.join(',')}</td>
            <td className="py-2 hidden md:table-cell">{item.classes && item.classes.join(',')}</td>
            <td className="py-2 hidden lg:table-cell">{item.phone}</td>
            <td className="py-2 hidden lg:table-cell">{item.address}</td>
            <td className="py-2 flex items-center space-x-2">
                <div className="bg-sky/20 p-1 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                    <Eye size={24} color="gray" />
                </div>

                <div className="bg-sky/20 p-1 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
                    <Trash size={24} color="gray" />
                </div>
            </td>
        </tr>
    );

    const totalPages = data ? Math.ceil((data.total || 0) / 10) : 0;
    console.log(totalPages);
    return (
        <div className="w-full min-h-screen bg-white p-4 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h1 className="hidden md:block text-xl">Teachers List</h1>
                <div className="flex space-x-2">
                    <SearchBox />
                    <div className="bg-blue p-1 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer">
                        <UserPlus size={24} color="white" />
                    </div>
                </div>
            </div>
            <Table key={page} columns={columns} data={data.data} renderRow={renderRow} />
            <div className="flex justify-center items-center flex-wrap gap-2 mt-4">
                <button
                    onClick={() => setPage((old) => Math.max(old - 1, 1))}
                    disabled={page === 1}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 rounded ${page === p ? "bg-blue text-white" : "bg-gray-100 text-gray-800"}`}
                    >
                        {p}
                    </button>
                ))}

                <button
                    onClick={() => setPage((old) => Math.min(old + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>


        </div>
    );
};

export default TeachersList;
