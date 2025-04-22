
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useFetch } from "../api/fetching";
import { Ellipsis } from "lucide-react";


export function AttendancesChart() {
  const { data } = useFetch("/absences");

  const AbsenceCount = (type,day) => {
    if (!data || data.length === 0) {
      return 0;
    }
    return data.filter((absence) => {
      const absenceDay = new Date(absence.absence_date).toLocaleString('en-US', { weekday: 'short' }); // استخراج اليوم من التاريخ
      return absence.absence_status === type && absenceDay === day;
    }).length;
  }

  const AbsencData = [
    {
      name: "Mon",
      present: AbsenceCount("P","Mon"),
      absent: AbsenceCount("A","Mon"),
    },
    {
      name: "Tue",
      present: AbsenceCount("P","Tue"),
      absent: AbsenceCount("A","Tue"),
    },
    {
      name: "Wed",
      present: AbsenceCount("P","Wed"),
      absent: AbsenceCount("A","Wed"),
    },
    {
      name: "Thu",
      present: AbsenceCount("P","Thu"),
      absent: AbsenceCount("A","Thu"),
    },
    {
      name: "Fri",
      present: AbsenceCount("P","Fri"),
      absent: AbsenceCount("A","Fri"),
    },
    {
      name: "Sat",
      present: AbsenceCount("P","Sat"),
      absent: AbsenceCount("A","Sat"),
    },
  ];

  return (
    <div className="bg-white rounded-lg p-2 h-96 w-full">
      <div className="flex justify-between items-center">
        <h1 className=" text-xl">Attendance</h1>
        <Ellipsis />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={AbsencData} barSize={15}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />

          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#C8E6F1"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#D8CAF1"
            legendType="circle"
            radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>


    </div>
  );
};



