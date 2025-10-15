export default async function handler(req, res) {
  const { location, name } = req.query;
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=YOUR_API_KEY&city=${location}&keyword=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ events: data._embedded?.events || [] });
}
