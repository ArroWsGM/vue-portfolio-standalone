/**
 * Created by ArroWs on 04.05.2017.
 */
export default class Validator {
    constructor(data){
        // for(let field in data)
        //     this[field] = data[field]
        //this.value = data

        this.errors = {}
    }


    required(value){
        return this.errors['required'] = !!value.length
    }


    between(value, min, max){
        return this.errors['between'] = value.length > min || value.length < max
    }


    email(value){
        return this.errors['email'] = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/).test(value)
    }
}