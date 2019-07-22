summ();
function summ() {
    var arr = prompt('Введите элементы массива через пробел').split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    var maxSumm = 0;
    var summ = 0;
    for (var i = 0; i < arr.length - 1; i++ ) {
        if (arr[i] + 1 == arr[i + 1]) {
            summ = arr[i];
            while (arr[i + 1] - 1 == arr[i] & i < arr.length) {
                summ += arr[i + 1];
                i++;
            }
        }
        maxSumm = (summ > maxSumm) ? summ : maxSumm;              
    }
    console.log('Max summ = ' + maxSumm);
}