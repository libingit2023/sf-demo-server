export default function handler(req, res) {
  res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors https://*.salesforce.com https://*.lightning.force.com"
  );
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <h2>Allowed in Salesforce iframe</h2>
  `);
}
