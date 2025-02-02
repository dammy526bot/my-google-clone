
// 獲取按鈕元素
const discordButton = document.getElementById('discordButton');
const robloxButton = document.getElementById('robloxButton');

// 設定動畫間隔時間 (毫秒)
const animationDuration = 1000; // 1秒

// 讓按鈕交替變大和變小
setInterval(() => {
    // 放大 Discord 按鈕，縮小 Roblox 按鈕
    discordButton.style.transform = 'scale(1.5)';
    robloxButton.style.transform = 'scale(0.6)';

    setTimeout(() => {
        // 還原 Discord 按鈕和 Roblox 按鈕大小
        discordButton.style.transform = 'scale(1)';
        robloxButton.style.transform = 'scale(1)';
    }, animationDuration); // 還原時間要等到動畫完成
}, animationDuration * 2); // 每 2 秒交替一次

<link rel="stylesheet" href="styles.css"></link>