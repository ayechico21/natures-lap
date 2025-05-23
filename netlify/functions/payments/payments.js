/* 
export default async function handler(event) {
  try {
    const params = new URLSearchParams(event.body);
    const parsed = Object.fromEntries(params.entries());

    console.log("ICICI Payment Callback Received:", parsed);

    return new Response(
      JSON.stringify({ message: "Callback received successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid request" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
 */
export default async function handler(event) {
  try {
    const method = event.httpMethod;
    console.log(`Received ${method} request`);

    // Default initialization for queryParams, body, and headers
    let queryParams = {};
    let body = null;
    let headers = {};

    try {
      // Check for GET parameters (query string)
      queryParams = event.queryStringParameters || {};
      console.log("ICICI Callback - Query Params:", queryParams);
    } catch (error) {
      console.error("Error accessing query params:", error);
    }

    try {
      // Check if the request is a POST and parse the body
      if (method === "POST" && event.body) {
        // Parse body for JSON or URL-encoded
        if (event.headers["content-type"] && event.headers["content-type"].includes("application/x-www-form-urlencoded")) {
          // Form data or URL-encoded
          const urlencodedData = new URLSearchParams(event.body);
          body = Object.fromEntries(urlencodedData.entries());
          console.log("ICICI Callback - Body (URL Encoded):", body);
        } else {
          // Assume JSON for standard application/json requests
          body = JSON.parse(event.body);
          console.log("ICICI Callback - Body (JSON):", body);
        }
      }
    } catch (error) {
      console.error("Error parsing POST body:", error);
    }

    try {
      // Check headers
      headers = event.headers || {};
      console.log("ICICI Callback - Headers:", headers);
    } catch (error) {
      console.error("Error accessing headers:", error);
    }

    // Return the response with received data
    return new Response(
      JSON.stringify({
        message: "Callback received successfully",
        method,
        received: {
          queryParams,
          body,
          headers,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling callback:", error);
    return new Response(
      JSON.stringify({ error: "Invalid request format" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
