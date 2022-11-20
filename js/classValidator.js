class Validator {
    constructor(str) {
        this.str = str;
    }
    isEmail(str) {
        const regExp = /@/i;
        // const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

        if (regExp.test(str)) {
            let [userName, hostName] = str.split('@');
            if (/^[0-9A-Za-z]+$/.test(userName)) {
                if (/.ru$/ig.test(hostName) || /.com$/ig.test(hostName) || /.net$/ig.test(hostName)) {
                    console.log(`ваш email: ${str}`);
                    return true;
                } else {
                    console.log('введите корректное доменное имя');
                    return false;
                }
            } else {
                console.log(userName);
                console.log('не правильный email, введите  email в формате userName@hostName');
                return false;
            }
        } else {
            return false;
        }
    }
    isDate(str) {
        const regExpData3 = /([012]\d|3[0-1]).(0\d|1[0-2]).\d{4}/g;
        
        if(regExpData3.test(str)){
            console.log(`дата ${str}`);
            return true;
        } else{
            console.log('введите корректнyю дату в формате ДД.ММ.ГГГГ');
            return false;
        }
           
        //второй способ

        // const regExpData1 = /^\d\d.\d\d.\d{4}$/;
        // const regExpData2 = /^\d\d.\d\d.\d{2}$/;

        // if (regExpData1.test(str) || regExpData2.test(str)) {
        //     console.log(str);
        //     return true;
        // } else {
        //     console.log('введите корректнyю дату в формате ДД.ММ.ГГГГ или в формате ДД.ММ.ГГ');
        //     return false;
        // }
    }
    isDomain(str) {
       
        const regExp =/./i;
        if(regExp.test(str)){
            let [userName, hostName] = str.split('.');
            if(/^[0-9A-Za-z]+$/.test(userName)){
                if(/^[A-Za-z]+$/.test(hostName)){
                    console.log( `ваш domain: ${str}`);
                    return true;
                } else{
                    console.log('введите корректный домен userName.hostName');
                    return false;
                }
            } else{
                console.log('введите корректный домен userName.hostName');
                return false;  
            }    
        } else{
            console.log('введите корректный домен userName.hostName');
        }  
        
        // Второй способ  
        
        // let regexp = /(\w+\.)+\w+/g;
        // if (regexp.test(str)) {
        //     console.log(`ваш domain: ${str}`);
        //     return true;
        // } else {
        //     console.log('введите корректный домен userName.hostName');
        //     return false;
        // }
    }
    isPhone(str) {
        const regExpPhone = /^\+\d{3}\(\d\d\)\d{3}-\d\d-\d\d$/;

        // let numbers = str.match(/\d+/g);
        // console.log(numbers.join(''));

        if (regExpPhone.test(str)) {
            console.log(`Ваш номер телефона: ${str}`);
            return true;
        } else {
            console.log('Введите корректрый телефон в формате +ХХХ(ХХ)ХХХ-ХХ-ХХ');
            return false;
        }
    }
}

let validator = new Validator();
console.log(validator.isEmail('vvvv@mail.com'));
console.log(validator.isDate('30.12.2022'));
console.log(validator.isDomain('uuuu.ttttt.aaaaa.net'));
console.log(validator.isPhone('+375(29)761-66-66'));


