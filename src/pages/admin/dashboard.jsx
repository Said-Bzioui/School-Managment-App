import { DashCart } from "../../components/dashCart";
import { GanderChart } from "../../components/ganderChart";
import { AttendanceChart } from "../../components/attendanceChart";
import FinanceChart from "../../components/FinanceChart";
import EventCalendar from "../../components/EventCalendar";
import Announcements from "../../components/Announcements";
import { useFetch } from "../../api/fetching";

export function Dashboard() {
    const { data:TeacherData, isLoading : LoadingTeacher, error :ErrorTeacher} = useFetch("/teachers");
    const { data:StudentsData, isLoading : LoadingStudents, error :ErrorStudents} = useFetch("/students");
    const { data:ClassesData, isLoading : LoadingClasses, error :ErrorClasses} = useFetch("/classes");
    return (
        <>
            {/* LEFT SIDE */}
            <div className="w-full  lg:w-4/6 space-y-4 ">
                <div className="flex flex-wrap items-center gap-3">
                    <DashCart label={"Teachers"} count={TeacherData && TeacherData.length} isLoading={LoadingTeacher} error={ErrorTeacher} />
                    <DashCart label={"Students"} count={StudentsData && StudentsData.length} isLoading={LoadingStudents} error={ErrorStudents}/>
                    <DashCart label={"Classes"} count={ClassesData && ClassesData.length} isLoading={LoadingClasses} error={ErrorClasses}/>
                    <DashCart label={"chi7aja"} count={TeacherData && TeacherData.length} isLoading={LoadingTeacher} error={ErrorTeacher}/>
                </div>
                <div className="flex flex-col md:flex-row  items-center gap-4">
                    <GanderChart />
                    <AttendanceChart />
                </div>

                <FinanceChart />




            </div>
            {/* RIGHT SIDE */}
            <div className="w-full lg:w-2/6 flex flex-col md:flex-row  lg:flex-col space-y-4 md:space-y-0 md:gap-3">
                <EventCalendar />
                <Announcements />
            </div>
        </>
    )
}