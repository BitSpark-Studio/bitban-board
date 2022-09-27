import type { NextPage } from "next";
import Canvas from "../components/Canvas";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div>
      <Sidebar />
      <Canvas />
    </div>
  );
};

export default Home;
