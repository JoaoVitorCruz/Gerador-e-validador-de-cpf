class ValidaCpf {
    constructor(cpf) {
        if (typeof cpf != 'string') cpf.toString();

        Object.defineProperties(this, {
            'cpfLimpo': {
                configurable: false,
                writable: false,
                enum: true,
                value: cpf.replace(/\D+/g, '').slice(0, -2)
            },
            'digitos': {
                configurable: false,
                writable: false,
                enum: true,
                value: cpf.replace(/\D+/g, '').slice(-2)
            }
        })
    }

    static geraDigitos(cpf) {
        const arrD1 = [];
        const arrD2 = [];
        let d2;
        let d1;
        let sum;
        let cpfComDigito;

        for (let i = 1; i <= 9; i++) {
            arrD1.push(cpf[i - 1] * i)
        }

        sum = arrD1.reduce((ac, val) => {
            return ac + val
        }, 0) % 11

        if (sum > 9) {
            d1 = 0
        } else {
            d1 = arrD1.reduce((ac, val) => {
                return ac + val
            }, 0) % 11
        }

        cpfComDigito = cpf + d1

        sum = undefined

        for (let i = 0; i < 10; i++) {
            arrD2.push(cpfComDigito[i] * i)
        }

        sum = arrD2.reduce((ac, val) => {
            return ac + val
        }, 0) % 11

        if (sum >= 10) {
            d2 = 0
        } else {
            d2 = arrD2.reduce((ac, val) => {
                return ac + val
            }, 0) % 11
        }

        return `${d1}${d2}`
    }

    static geraCpf() {
        function rand(min, max) {
            return Math.round(Math.random() * (max - min) + min)
        }
        let numeracao = rand(100000000, 999999999)
        let digitos = ValidaCpf.geraDigitos(String(numeracao))
        let cpf = numeracao + digitos
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        
    }

    valida() {
        let digitosVerificados = ValidaCpf.geraDigitos(this.cpfLimpo)

        if (digitosVerificados == this.digitos) {
            return true
        } else {
            return false
        }

    }
}


export {ValidaCpf}