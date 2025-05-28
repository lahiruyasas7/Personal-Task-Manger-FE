import CalenderComponent from "./components/Home/CalenderComponent";
import MyTasksComponent from "./components/Home/MyTasksComponent";
import MyCategories from "./components/Home/MyCategories";

export default function Home() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <CalenderComponent />
        <MyCategories />
      </div>

      <MyTasksComponent />
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    // </div>
  );
}
