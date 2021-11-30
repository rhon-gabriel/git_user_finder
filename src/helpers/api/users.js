import axios from "axios";

export async function getUsers(params) {
  let baseURL = `https://api.github.com/search/users?q=`;
  let extraParams = `&per_page=100&sort=followers&order=desc`;
  let followers = params.followers ? `+followers:<=${params.followers}` : "";
  return await axios.get(
    `${baseURL}${params.user}+in:email+in:login+in:name+${followers}${extraParams}`,
    {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    }
  );
}
