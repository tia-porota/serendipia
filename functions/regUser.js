import { IP, PORT } from "./backInfo";
const saveUser = async (user, pass) => {
  const send = JSON.stringify({ user, pass });
  const url = 'http://'+IP+':'+PORT+'/users/';

  let result = await fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: send,
  });
  console.log(result);
};

export default saveUser;