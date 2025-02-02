// script.js
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // 防止表單提交刷新頁面
    let query = document.getElementById("searchInput").value; // 獲取輸入的內容
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`; // 跳轉到 Google 搜尋結果
    }
});