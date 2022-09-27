import Image from "next/image";
import avator from "../public/collaborator-icon.jpg";

export default function Collaborators() {
  return (
    <div>
      <Image src={avator} alt="Landscape picture" width={50} height={50} />
      <Image src={avator} alt="Landscape picture" width={50} height={50} />
      <Image src={avator} alt="Landscape picture" width={50} height={50} />
      <button>+ Invite</button>
    </div>
  );
}
