import Image from "next/image";
import avatar from "../public/collaborator-icon.jpg";
import comment from "../public/svg/comment.svg";
import linkIcon from "../public/svg/linkIcon.svg";

export default function Card() {
  return (
    <div>
      <p>Card Type</p>
      <h3>Card Title</h3>
      <p>Description</p>
      <Image src={avatar} alt="Reporter" width={50} height={50} />
      <p>Reporter</p>
      <Image src={comment} alt="comment" />
      <Image src={linkIcon} alt="link" />
    </div>
  );
}
