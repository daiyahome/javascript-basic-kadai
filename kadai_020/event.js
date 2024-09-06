const clickBtn = document.getElementById('btn');
const reText = document.getElementById('text');

clickBtn.addEventListener('click', () => {
    reText.textContent = 'ボタンをクリックしました';
});
