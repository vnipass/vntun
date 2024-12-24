const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Hàm main: Nhận `params` từ luồng chính
async function main(params) {
  const { id, axios } = params;

  try {
    const response = await axios.get(`https://api.zingproxy.com/getip/${id}`);
    if (response.data) {
      let data = response.data.data || null;
      let proxy = data.info?.httpProxy || '';
      if (proxy !== '') {
        // Tách chuỗi proxy thành các phần (ip, port, username, password)
        const [ip, port, username, password] = proxy.split(':'); // Sửa lỗi tách chuỗi
        return `${username}:${password}@${ip}:${port}`;
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
