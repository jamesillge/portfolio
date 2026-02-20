import { Link } from "react-router-dom";

function ContactIcon({
  icon,
  alt,
  path,
}: {
  icon: string;
  alt: string;
  path: string;
}) {
  return (
    <>
      <Link to={path}>
        <button>
          <img src={icon} alt={alt} className="size-9 border border-white" />
        </button>
      </Link>
    </>
  );
}

export default ContactIcon;
