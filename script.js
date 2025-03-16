document.addEventListener('DOMContentLoaded', () => {
    // Make email clickable
    const emailElement = document.querySelector('.email-container');
    if (emailElement) {
        emailElement.addEventListener('click', () => {
            // Replace with your actual email address
            window.location.href = 'mailto:contact@parsonsandsystems.com';
        });
    }

    // 言語切り替えボタン
    const enBtn = document.getElementById('en-btn');
    const jaBtn = document.getElementById('ja-btn');
    const mainTitle = document.querySelector('.main-title');
    
    // 英語と日本語のテキスト
    const texts = {
        en: {
            title: 'Parsons & Systems'
        },
        ja: {
            title: 'パーソンズ & システムズ'
        }
    };
    
    // 英語ボタンがクリックされたとき
    enBtn.addEventListener('click', () => {
        mainTitle.textContent = texts.en.title;
        enBtn.classList.add('active');
        jaBtn.classList.remove('active');
        document.documentElement.lang = 'en';
    });
    
    // 日本語ボタンがクリックされたとき
    jaBtn.addEventListener('click', () => {
        mainTitle.textContent = texts.ja.title;
        jaBtn.classList.add('active');
        enBtn.classList.remove('active');
        document.documentElement.lang = 'ja';
    });
}); 