//sources:
//https://ponyfoo.com/articles/es6-proxies-in-depth
//https://gist.github.com/ifraixedes/e9311748c961f1dbb93e#file-private-props-es6-class-with-proxy-js

//create proxied instance where '_' fields are private
class User {
    constructor(nickname, username, email){ 

        this.nickname = nickname //will be public

        //NOT VALIDATED
        // this._username = username //will be private
        // this._email = email //will be private

        //INVOKES THE SETTERS! 
        //after validation set _username and _email
        this.username = username
        this.email = email


        return Proxy.revocable(this, { //to have access to revoke() function, Proxy is not an instance
            get(target, key){
                try{
                    invariant(target, key, 'get')
                    return target[key] //invoke class getter
                }catch(e){
                    console.error(e.message)
                }       
            },
            set(target, key, value){
                try{
                    invariant(target, key, 'set')
                    target[key] = value //invoke class setter
                    return true
                }catch(e){
                    console.error(e.message)   
                }   
            }
        })
        
    }
    greeting(){
        console.log(`Hello ${this.nickname}!`)
    }

    bye(){
        console.log(`Bye ${this.nickname}!`)
    }

    get username(){
        console.log(`Public access to username field.`)
        return this._username
    }
    
    set username(username){
        try{
            if(username.length < 6){
                throw Error('Username is too short')
            }
            this._username = username 
        }catch(e){
            console.error(e.message)
        } 
    }
    
    get email(){
        console.log(`Public access to email field.`)
        return this._email
    }

    set email(email){
        try{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                throw Error('Not valid email')
            }
            this._email = email
        }catch(e){
            console.error(e.message)
        }
    }
}


function invariant (target, key, action) { 
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`)
    }
}

const proxiedUser = new User('ashad912', 'Christopher', 'ashad912@email.com') // {proxy, revoke}
console.log(proxiedUser) //can invoke revoke() on proxiedUser

const user = proxiedUser.proxy 
console.log(user) // {nickname, _username, _email}
user.greeting()

//GET
console.log('Nickname:', user.nickname)

console.log('Username:', user._username) //FORBIDDEN 
console.log('Email:', user._email) //FORBIDDEN 

console.log('Username:', user.username)
console.log('Email:', user.email)

//SET
user.nickname = 'ashad'

user._username = 'christopher' //FORBIDDEN   
user._email = 'ashad912@email.net' //FORBIDDEN 
user.username = 'Chris' //NOT VALID   
user.email = 'ashad912@' //NOT VALID

user.username = 'christopher' 
user.email = 'ashad912@email.net'
console.log(user)

user.bye()

//PROXY REVOKE
proxiedUser.revoke()

try{
    user.bye() //proxy has been revoked
}catch(e){
    console.error(e)
}






