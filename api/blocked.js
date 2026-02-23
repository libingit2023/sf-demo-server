export default function handler(req, res) {
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <h2>Blocked by SAMEORIGIN</h2>
  `);
}
