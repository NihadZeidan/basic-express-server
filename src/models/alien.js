'use strict';


class Alien {
    constructor() {
        this.id = 0;
        this.db = [];
        // this.name = name;
        // this.functionality = functionality
        // this.liveIn = liveIn
    }

    get(id) {

        if (id) {
            return this.db.find(element => element.id == id)
        } else {
            return this.db
        }

    }

    create(obj) {

        let newAlien = {
            id: ++this.id,
            record: obj
        }

        this.db.push(newAlien);
        return newAlien
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
        for (let i = 0; i < this.db.length; i++) {
            if (this.db[i].id == id) {
                this.db[i] = "deleted";
            }
        }

        let newArr = [];
        this.db.forEach((element) => {
            if (element != "deleted") {
                newArr.push(element);
            }
        });
        this.db = newArr

        return null
    }
}


module.exports = Alien