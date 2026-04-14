console.log("FUNCTION STARTED");
exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const prompt = body.prompt;

    if (!prompt) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No prompt received" })
      };
    }

    // (Claude API goes here later)

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        received: { prompt }
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};