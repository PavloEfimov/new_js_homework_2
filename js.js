const resort = prompt('введите число 1, 2 или 3', '1-taba, 2-sharm, 3-hurgada');

switch (resort) {
    case '1':
        alert('пользователь выбрал курорт taba');
        break;
    case '2':
        alert('пользователь выбрал курорт sharm');
        break;
    case '3':
        alert('пользователь выбрал курорт hurgada');
        break;
    default:
        alert('введено число, варианта курорта для которого не было');
}

// console.log(resort);