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

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CLAUDE_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-latest",
        max_tokens: 300,
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      })
    });

    const data = await response.json();

    console.log("CLAUDE RESPONSE:", data);

    // 🔥 IMPORTANT: return full response so we can see errors
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    console.log("ERROR:", err);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message
      })
    };
  }
};