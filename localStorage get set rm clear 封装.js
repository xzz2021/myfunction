const storage = window.localStorage

const locStor = {
    set(key,value) {
        storage.setItem(key,JSON.stringify(value))
    },
    get(key){
        return JSON.parse(storage.getItem(key))
    },
    rm(key){
        storage.removeItem(key)
    },
    clear(){
        storage.clear()
    }
}

export {locStor}