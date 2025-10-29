//  variable aur js inject karne k liye return se pahle jo b code karte hai wo evaluate hoke {} k ander
// jata hai jaise k hum backticks use karke ${string interpolation} use karte the waise he use karna hota hai
// neeche ex diye hai username ka waise he use hota hai
// {} isko evaluated expression
// means jo b js ka code hota hai wo evaluate hokar jo outcome aata hai usi ko likhna hota hai
// jaise k ex mein username evaluate hokar aaya hua hai

function Learn() {
  const userName = "Mirza Azeem";
  return (
    <>
      <h2>Mirza Nayeem is learning ReactJs| {userName}</h2>
      <h3>It's very important to learn JS for React</h3>
    </>
  );
}
export default Learn;
