import { Link } from "react-router-dom";

function NavIcon({
  icon,
  alt,
  path,
  onClick,
}: {
  icon: string;
  alt: string;
  path: string;
  onClick?: () => void;
}) {
  return (
    <>
      <Link to={path}>
        <button
          className="md:15 flex size-13 items-center p-1 cursor-pointer link"
          onClick={onClick}
        >
          <img src={icon} alt={alt} />
        </button>
      </Link>
    </>
  );
}

export default NavIcon;
