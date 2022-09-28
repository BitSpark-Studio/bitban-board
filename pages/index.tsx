import type { NextPage } from "next";
import Canvas from "../components/Canvas";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Canvas />
      </div>
    </div>
  );
};

export default Home;
