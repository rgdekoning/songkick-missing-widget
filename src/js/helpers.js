const fetchSkEvents = async (url) => {
  const data = await fetch(url).then((response) => response.json());

  return data.resultsPage.results.event;
};

const buildSkUrlByQuerystring = (urlParams) => {
  const artistId = urlParams.get('artistId');
  const apiKey = urlParams.get('apiKey');
  const page = urlParams.get('page') || 1;
  const perPage = urlParams.get('per_page') || 50;
  const orderBy = urlParams.get('order') || 'asc';

  return `https://api.songkick.com/api/3.0/artists/${artistId}/gigography.json?apikey=${apiKey}&order=${orderBy}&page=${page}&per_page=${perPage}`;
};

const fetchSkEventsByQuerystring = (urlParams) => fetchSkEvents(buildSkUrlByQuerystring(urlParams));

export default { fetchSkEvents, buildSkUrlByQuerystring, fetchSkEventsByQuerystring };
