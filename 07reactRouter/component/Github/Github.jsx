import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/nayeemrsd")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   });
  //  another optimize way to do this by using loaders
  //   neeche ka method acha aur optimize hai wohi use karna website pr page change hora to mlm b nhi hota
  // ooper k method se thoda bht lag aata wo neeche k method mein feel b nhi hota pr ooper wale mein hota
  //   neeche ka method se murad ek file hai jo k DataLoad naam se hai wo wahan move kara
  // q k yahan se wo export nhi hori thi is liye doosre folder mein dala taake wahan se export hojaye
  // phr b comment  karke yahan chod deta hoon

  return (
    <div className="bg-gray-600 text-white text-3xl p-4">
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

// export const githubDataLoader = async () => {
//   const response = await fetch("https://api.github.com/users/nayeemrsd");
//   return response.json();
// };
// ye wohi file hai DataLoad wali just yaad rahna bolke yahan comment karke rakha
