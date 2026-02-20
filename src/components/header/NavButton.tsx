import { Link } from "react-router-dom";

function NavButton({
  text,
  path,
  onClick,
}: {
  text: string;
  path: string;
  onClick?: () => void;
}) {
  return (
    <>
      <Link to={path}>
        <button
          className="m-0 flex size-fit cursor-pointer p-0 text-5xl uppercase md:text-6xl link"
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    </>
  );
}

export default NavButton;
