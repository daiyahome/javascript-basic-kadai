const clickBtn =  document.getElementById('btn');
const reText = document.getElementById('text');

clickBtn.addEventListener ('click', () => {
    setTimeout(() => {
    reText.textContent = 'ボタンをクリックしました';
},2000);
});