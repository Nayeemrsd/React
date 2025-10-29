import React from "react";
import { useParams } from "react-router-dom";

function User() {
  //   return <h1>User is there</h1>;
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User: {userid}</div>
  );

  //   const { userid } = useParams();
  //   return (
  //     <div className="bg-grey-600 text-white text 3xl p4">User: {userid}</div>
  //   );
}

export default User;
