//when : wrapper api function utilized by dashboard component to fetch data
//does : returns response if promises resolve or error if it fails

export const fetchApiWrapper = async (baseURL, params = "", query = "") => {
  let entityURL = baseURL
    ? baseURL
    : "https://in.bmscdn.com/m6/static/interview-mock";
  if (entityURL) {
    if (params.length) {
      entityURL += "/" + params.trim();
    }
    if (query.length) {
      entityURL += "?" + query.trim();
    }
  }

  try {
    const response = await fetch(entityURL);
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

//when : wrapper function utilized by video component to sanitize youtube url
//does : returns url that is compatible for playing in embeded view.
export const sanitizeURL = (
  url = "",
  existingString = "",
  replaceString = ""
) => {
  let tempURL = url;
  if (tempURL?.includes(existingString)) {
    let modUrl = tempURL?.replace(existingString, replaceString);
    return modUrl;
  } else return tempURL;
};
