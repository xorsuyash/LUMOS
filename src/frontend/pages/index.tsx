import { LeftSidebar } from "@/components/LeftSidebar";
import { Navbar } from "@/components/Navbar";
import { SubjectList } from "@/components/SubjectList";

export default function Dashboard() {
    return (
        <div className="flex flex-col-reverse sm:flex-row  ">
            {/* Left Sidebar */}
            <LeftSidebar />
            {/* Main Content */}
            <div className="flex flex-col w-full sm:w-3/4 sm:ml-[25%]">
                <Navbar />
                <SubjectList />
            </div>
        </div>
    );
}
