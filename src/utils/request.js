const apiKey = "sb_publishable_tBbp2YcHXaaEzqY072-9Ng_q7ay_OVp";
const url = "https://tdyhrjbjvmtyyxgysxss.supabase.co/rest/v1/";

export default async function request(path = "/", method = "GET", data = null) {
  const options = {
    headers: {
      apikey: apiKey,
    },
  };

  if (method !== "GET") {
    options.method = method;
  }

  if (data) {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${url}${path}`, options);

  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
