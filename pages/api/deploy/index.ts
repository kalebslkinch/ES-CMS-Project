export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request

    const response = fetch(
      "https://api.vercel.com/v1/integrations/deploy/prj_Ii6ZMmAl6mnSMECZxyhAjOnE1vFv/8dFQHGKOav",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    res.redirect(`${req.headers.origin}/konnection/`);
  } else {
    // Handle any other Hstatusthod
  }
}
