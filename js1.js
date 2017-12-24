const members = prompt('введите число участников группы', 'целое положительное число');

if (members == Math.abs(members) && members == Math.round(members)) {

    // Всего имеется три группы sharm, hurgada и taba.
    //   	В группах ограничено кол-во свободных мест:
    let sharm = 15;
    let hurgada = 25;
    let taba = 6;

    // решение предложено для случая неоднократного запуска программы, когда 
    // число мест в группах может уменьшаться

    // если группа изначально помещается в sharm, отрабатываем отказы пользователя

    if (members <= sharm) {
        var agree = confirm("есть место в группе sharm, согласны?");
        if (agree == true) {
            sharm = sharm - members;
            console.log('sharm осталось', sharm)
        } else if (members <= hurgada) {
            var agree = confirm("есть место в группе hurgada, согласны?");
            if (agree == true) {
                hurgada = hurgada - members;
                console.log('hurgada осталось', hurgada)
            } else if (members <= taba) {
                var agree = confirm("есть место в группе taba, согласны?");
                if (agree == true) {
                    taba = taba - members;
                    console.log('taba осталось', taba)
                }
            } else alert('в оставшихся группах мест нет!')
        } else alert('в оставшихся группах мест нет!')

        // если группа изначально помещается в hurgada, отрабатываем отказы пользователя

    } else if (members <= hurgada) {
        var agree = confirm("есть место в группе hurgada, согласны?");
        if (agree == true) {
            hurgada = hurgada - members;
            console.log('hurgada осталось', hurgada)
        } else if (members <= taba) {
            var agree = confirm("есть место в группе taba, согласны?");
            if (agree == true) {
                taba = taba - members;
                console.log('taba осталось', taba)
            }
        } else alert('в оставшихся группах мест нет!')

        // если группа изначально помещается в taba

    } else if (members <= taba) {
        var agree = confirm("есть место в группе taba, согласны?");
        if (agree == true) {
            taba = taba - members;
            console.log('taba осталось', taba)
        }
    } else alert('Мест нет!');
    console.log('целое положительное число')
} else alert('ошибка, не целое положительное число')