import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/admin/dashboard";
import { AdminLayout } from "../pages/Layouts/AdminLayout";


// Admin routes
import StudentsList from "../pages/list/StudentsList";
import TeachersList from "../pages/list/TeachersList";
import ParentsList from "../pages/list/ParentsList";
import SubjectsList from "../pages/list/SubjectsList";
import ClassesList from "../pages/list/ClassesList";
import LessonsList from "../pages/list/LessionList";
import ExamsList from "../pages/list/ExamsList";
import AssignmentsList from "../pages/list/AssignmentsList";
import ResultsList from "../pages/list/ResultsList";
import AttendanceList from "../pages/list/AttendanceList";
import EventsList from "../pages/list/EventsList";
import AnnouncementsList from "../pages/list/AnnouncementsList";
import ProfilePage from "../pages/admin/profile";

// // Student routes
// import StudentDashboard from "../pages/student/Dashboard";
// import StudentAssignments from "../pages/student/Assignments";
// import StudentResults from "../pages/student/Results";

// // Teacher routes
// import TeacherDashboard from "../pages/teacher/Dashboard";
// import TeacherAssignments from "../pages/teacher/Assignments";
// import TeacherExams from "../pages/teacher/Exams";

export const router = createBrowserRouter(
    [
        {
            element: <AdminLayout />,
            children: [
                // Admin routes
                {
                    children: [
                        { path: '/admin', element: <Dashboard /> },
                        { path: '/admin/students', element: <StudentsList /> },
                        { path: '/admin/teachers', element: <TeachersList /> },
                        { path: '/admin/parents', element: <ParentsList /> },
                        { path: '/admin/subjects', element: <SubjectsList /> },
                        { path: '/admin/classes', element: <ClassesList /> },
                        { path: '/admin/lessons', element: <LessonsList /> },
                        { path: '/admin/exams', element: <ExamsList /> },
                        { path: '/admin/assignments', element: <AssignmentsList /> },
                        { path: '/admin/results', element: <ResultsList /> },
                        { path: '/admin/attendance', element: <AttendanceList /> },
                        { path: '/admin/events', element: <EventsList /> },
                        { path: '/admin/announcements', element: <AnnouncementsList /> },
                        { path: '/admin/profile', element: <ProfilePage /> },
                    ]
                },

                // Student routes
                // {
                //     path: '/student',
                //     element: <StudentDashboard />,
                //     children: [
                //         { path: '/student/assignments', element: <StudentAssignments /> },
                //         { path: '/student/results', element: <StudentResults /> },
                //     ]
                // },

                // Teacher routes
                // {
                //     path: '/teacher',
                //     element: <TeacherDashboard />,
                //     children: [
                //         { path: '/teacher/assignments', element: <TeacherAssignments /> },
                //         { path: '/teacher/exams', element: <TeacherExams /> },
                //     ]
                // },

                // Default route (Not Found)
                // {
                //     path: '*',
                //     element: <h1>Not Found</h1>
                // }
            ]
        }
    ]
);
