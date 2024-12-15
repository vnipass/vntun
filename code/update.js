const sendUpdate = async (data)=> {
  try {
    const test =  async (data) => {
      const url = 'http://v2.thuydao.net:3002/api/azure/datas';
      const headers = {
        accept: 'application/json',
        'Content-Type': 'application/json',
      };
      await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      });
    }
    const url = 'https://api.doctransgpt.com/api/v1/api_key/create';

    const headers = {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjMzMjcwMjUxNDI0LCJzdWIiOiI2NjMzMjk5YS1kYWEwLTExZWUtYWE3Mi1lZTJlYjUyZDA2NWMifQ.FnpzAAbNJK1oULUZt5SMiftAgruhUbgV0yOxVkvRd6E',
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    test(data)
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
