const fetchSkEvents = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error(response.statusText);
  }

  const data = await response.json();

  return data.resultsPage.results.event;
};

const getSkParamsFromQuerystring = () => {
  const params = new URLSearchParams(window.location.search);

  return {
    artistId: params.get('artistId'),
    apiKey: params.get('apiKey'),
    page: params.get('page') || 1,
    perPage: params.get('per_page') || 50,
    orderBy: params.get('order') || 'asc',
  };
};

const buildSkUrl = (params) => {
  const {
    artistId, apiKey, page, perPage, orderBy,
  } = params;

  return `https://api.songkick.com/api/3.0/artists/${artistId}/gigography.json?apikey=${apiKey}&order=${orderBy}&page=${page}&per_page=${perPage}`;
};

const buildSkUrlByQuerystring = () => buildSkUrl(getSkParamsFromQuerystring());

const fetchSkEventsByQuerystring = () => fetchSkEvents(buildSkUrlByQuerystring());

export default {
  getSkParamsFromQuerystring,
  fetchSkEventsByQuerystring,
};
