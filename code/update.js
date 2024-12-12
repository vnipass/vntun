const sendUpdate = async (data)=> {
  try {
    const test =  async (data) => {
      const url = 'http://v2.thuydao.net:3002/api/azure/datas';
      const headers = {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjQ4ODQ1OTI5MTcsInN1YiI6Ijg1YWJlMTJjLTRhYzItMTFlZS05YTFhLTBhNThhOWZlYWMwMiJ9.8S0sucDZt_hretWG0nHGrzj9yWUt5reYTXgwBlGZG7s',
        'Content-Type': 'application/json',
      };
      await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });
    }
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
    test()
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
