const apiKey = "sb_publishable_tBbp2YcHXaaEzqY072-9Ng_q7ay_OVp";
const url = "https://tdyhrjbjvmtyyxgysxss.supabase.co/rest/v1/";

export default async function request(
  path = "/",
  url,
  method = "GET",
  data = null,
) {
  const options = {
    headers: {
      apiKey: apiKey,
    },
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.body = JSON.parse(data);
    options.headers["Content-Type"] = "aplication/json";
  }

  const response = await fetch(`${url}${path}`);
}
