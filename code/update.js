const sendUpdate = async (data)=> {
  try {
    const url = 'https://dev-api.poc.doctransgpt.com/api/v1/api_key/create';

    const headers = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4ODQ1OTI5MTcsInN1YiI6Ijg1YWJlMTJjLTRhYzItMTFlZS05YTFhLTBhNThhOWZlYWMwMiJ9.8S0sucDZt_hretWG0nHGrzj9yWUt5reYTXgwBlGZG7s',
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Response:', responseData);
    return responseData || null
  } catch (error) {
    console.error('Error:', error.message);
    return null
  }
}
