const lamp = document.getElementById('id_btn_lamp');
const body = document.getElementsByTagName('body')[0];
lamp.addEventListener('click', lampFun2);
function lampFun2() {
    if (lamp.value === '1') {
        lamp.value = '0';
        lamp.textContent = '关灯';
        body.className = 'light';
    } else {
        lamp.value = '1';
        lamp.textContent = '开灯';
        body.className = 'dark';
    }
}