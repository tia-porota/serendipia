import { conString } from "./backInfo";
const saveUser = async (user, pass) => {
  const send = JSON.stringify({ user, pass });
  const url = conString+'users/';

  let result = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: send,
  });
  console.log(result);
};

export default saveUser;