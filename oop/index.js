
//цепочка прототипов
let user = {
    login: '',
    password: '54545545454',
    validatePassword: function () {
        return this.password.length > 6
    },
}

let userProfile = {
    name: '',
    photo: '',
    age: 0,
    __proto__: user
}

userProfile.name = 'Ivan'
userProfile.age = 33
userProfile.password = '15151515'

console.log(userProfile)
console.log(userProfile.validatePassword())


// class
class User {
    constructor(login, password) {
        this.login = login
        this.password = password
    }
    validatePassword() {
        return this.password.length > 6
    }
}

class Admin extends User {
    constructor(login, password, name) {
        super(login, password);
        this.name = name
    }
    getDocuments(){
        return [1, 2, 3]
    }
    validatePassword() {
        return this.password.length > 8
    }

}

const firstAdmin = new Admin('firstAdminLogin', '1234567', 'Donald')
const firstUser = new User('firstUserLogin', '1234567')

console.log(firstAdmin.validatePassword())
console.log(firstUser.validatePassword())

