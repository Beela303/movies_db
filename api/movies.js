// api/movies.js
export default async function handler(request, response) {
  // Extract both potential parameters from the frontend request
  const { s, i } = request.query;
  const apiKey = process.env.API_KEY; 

  // Build the OMDb URL dynamically based on what the frontend sent
  let omdbUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;
  if (i) omdbUrl += `&i=${i}&plot=full`;
  if (s) omdbUrl += `&s=${s}`;

  try {
    const omdbResponse = await fetch(omdbUrl);
    const data = await omdbResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ error: "Failed to fetch data from OMDb" });
  }
}
