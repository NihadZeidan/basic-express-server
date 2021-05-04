'use strict';


class Human {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if (id) {
            return this.db.find(element => element.id == id)
        } else {
            return this.db
        }

    }

    create(obj) {

        let record = {
            id: this.id++,
            record: obj
        }

        this.db.push(record);
        return record
    }

    update(id, obj) {
        for (let i = 0; i < this.db.length; i++) {
            if (this.db[i].id == id) {
                this.db[i].record = obj;
                return this.db[i]
            }
        }
    }

    delete(id) {
        let flag;
        this.db = this.db.filter(element => {
            if (element.id != id) {
                return true
            } else {
                flag = null
                return false
            }
        });
        return null
    }
}


module.exports = Human