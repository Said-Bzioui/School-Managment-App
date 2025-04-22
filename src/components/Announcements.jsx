import { useFetch } from "../api/fetching";

const Announcements = () => {
  const { data } = useFetch("/announcements") || [];
  return (
    <div className="md:w-1/2 lg:w-full bg-white p-4 rounded-md ">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {data && data.length > 0 ? (
          data.slice(0, 3).map((announcement, index) => (
            <div key={announcement.id} className={` ${index == 0 ? "bg-sky/35" : index == 1 ? "bg-purpl/35" : "bg-orange/35"}  rounded-md p-4`}>
              <div className="flex items-center justify-between">
                <h2 className="font-medium">{announcement.title}</h2>
                <span className="text-[12px] text-gray-400 bg-white rounded-md px-1 py-0.5">
                  {announcement.date}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1 truncate">
              {announcement.description}
              </p>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-between">
          <h1 className="font-semibold text-red-600 mx-auto">No announcements available</h1>
        </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;
