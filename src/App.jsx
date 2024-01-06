import Navbar from "./Components/Organisms/Navbar/Navbar";
import SideMenu from "./Components/Organisms/SideMenu/SideMenu";

export default function App() {
  return (
    <main className="max-w-[1600px] mx-auto">
      <Navbar />
      <div className="flex">
        <SideMenu/>

      </div>
    </main>
  );
}



