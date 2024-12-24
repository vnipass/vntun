const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


// Hàm main: Nhận `params` từ luồng chính
async function main(params) {
  const { id, axios, ip } = params;

  try {
    const response = await axios.get(`https://api.tinproxy.com/proxy/get-new-proxy?api_key=${id}&authen_ips=${ip}`);
    if (response.data) {
      console.log(response.data)
      let data = response.data || null;
      if (data) {
        return `${data.authentication?.username}:${data.authentication?.password}@${data.http_ipv4}`
      }
      await sleep(3000); // Chờ 3s trước khi thử lại
      return await main(params);
    }
    return null;
  } catch (error) {
    console.error(`Lỗi trong main: ${error.message}`);
    await sleep(12000); // Chờ 12s trước khi thử lại
    return await main(params);
  }
}

// Xuất hàm main
module.exports = { main };
