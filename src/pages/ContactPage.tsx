import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <div className="contact h-dvh w-full mt-22 z-100">
        <div className="m-2 flex w-full flex-col gap-5 md:w-3/4">
          <p className="col-span-3">education</p>
          <hr />
          <div className="grid grid-cols-3 grid-rows-3">
            <p>2022 – present</p>
            <div className="col-span-2">
              <Link
                to="https://www.htwk-leipzig.de/studieren/studiengaenge/bachelorstudiengaenge/medieninformatik"
                rel="noopener noreferrer"
                className="link "
              >
                medieninformatik bachelor at htwk leipzig
              </Link>
            </div>
          </div>
          <p className="col-span-3">contact</p>
          <hr />
          <div className="grid grid-cols-3 grid-rows-3">
            <p>email</p>
            <div className="col-span-2">
              <Link
                to="mailto:james.illge@stud.htwk-leipzig.de"
                className="link"
              >
                james.illge@stud.htwk-leipzig.de
              </Link>
            </div>
            <p>github</p>
            <div className="col-span-2">
              <Link to="https://github.com/jamesillge" className="link">
                https://github.com/jamesillge
              </Link>
            </div>
            <p>social</p>
            <div className="col-span-2">
              <Link to="https://www.instagram.com/jamsyrr/" className="link">
                instagram
              </Link>
              <br />
              <Link
                to="https://www.are.na/james-illge-ounajp0pgcm/all"
                className="link"
              >
                are.na
              </Link>
              <br />
              <Link to="" className="link">
                linkedin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
