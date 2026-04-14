exports.handler = async (event) => {
  try {
    console.log("FUNCTION STARTED");

    const body = JSON.parse(event.body || "{}");
    console.log("BODY:", body);

    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        received: body
      })
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