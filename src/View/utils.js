
  //when : wrapper api function utilzed by dashboard component to fetch data
  //does : wrapper async/await promises callback function
  
export const apiWrapper = async (type, ) => {
  try {
    const response = await fetch(
      "https://in.bmscdn.com/m6/static/interview-mock/data.json"
    );
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const sanitizeURL = (url) => {
  let tempURL = url;
  if (tempURL?.includes("watch?v=")) {
    let modUrl = tempURL?.replace("watch?v=", "embed/");
    return modUrl;
  } else return tempURL;
};
