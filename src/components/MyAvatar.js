import "./MyAvatar.css";
import Avatar from "@material-ui/core/Avatar";

const MyAvatar = ({ src }) => {
  return (
    <div>
      <Avatar alt="user" src={src} className="myAvatar" />
    </div>
  );
};

export default MyAvatar;
