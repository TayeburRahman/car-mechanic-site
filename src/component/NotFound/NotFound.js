import React from "react";
import { Link } from "react-router-dom";
import notFount from "../../images/Notfound/5203299.jpg";

const NotFound = () => {
  return (
    <div>
      <div>
        <img src={notFount} alt="" width="35%" />
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-warning ps-4 pe-4"> Go Back</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
