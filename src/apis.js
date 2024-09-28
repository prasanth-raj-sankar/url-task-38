const BE_URL = 'http://localhost:4500'; // Backend URL


export const createShortUrlAPI = async (urlDetails) => {
  const response = await fetch(`${BE_URL}/urls/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(urlDetails), // Ensure `urlDetails` contains `originalUrl`
  });

  if (!response.ok) {
    throw new Error("Failed to shorten URL");
  }

  return await response.json();
};