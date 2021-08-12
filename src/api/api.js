/**
 * Endpoints
 */
export const API_FETCH_ARTICLES = "/api/article/";
export const GetArticles = ({category, startIdx, length}) => ({
  endpoint: `/api/article/${category}`,
  method: 'post',
  json: {
    start: startIdx,
    length: length,
  }
})

/**
 * callApi:
 * Do the actual fetch operation
 */
async function callApi(endpoint, method, json, {...customConfigs}) {

  const headers = { 'Content-Type': 'application/json' }
  const config = {
    method: method ? method : 'GET',
    ...customConfigs,
    headers: {
      ...headers,
      ...customConfigs.headers,
    },
  };

  if (json) {
    config.body = JSON.stringify(json);
  }

  let data;
  try {
    // mimic delay
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await window.fetch(endpoint, config);
    data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

function makeQuery(endpoint, query) {
  const params = new URLSearchParams(query)
  return endpoint + '?' + params.toString()
}

export default ({endpoint, method, query, json}) => {
  endpoint = query ? makeQuery(endpoint, query) : endpoint;

  return callApi(endpoint, method, json, {});
}