class Governor {
    constructor(nameOnlyParam) {
        this.name = nameOnlyParam

    }

    static isMikeDewine = true

    static isSeventyYearsOld = true

    static isARepublican = true

    static signsBills() {
        console.log("I sign bills")
    }

    static vetoBills() {
        console.log("I veto bills")
    }

    static grantPardons() {
        console.log("I can grant pardons")
    }

}

console.log(Governor.isMikeDewine)
console.log(Governor.isSeventyYearsOld)
console.log(Governor.isARepublican)

Governor.signsBills()
Governor.vetoBills()
Governor.grantPardons()

class Person {
    constructor(nameParam, ageParam, ethnicityParam) {
        this.name = nameParam
        this.age = ageParam
        this.ethnicity = ethnicityParam

    }

    sleeping() {
        console.log("I sleep every night")
    }

    working() {
        console.log("I work 5 days a week")
    }

    playing() {
        console.log("I enjoy having fun")
    }
}

class PostalWorker extends Person {
    constructor(nameParam, ageParam, ethnicityParam) {
        super(nameParam, ageParam, ethnicityParam)

    }

    deliver() {
        console.log("I deliver mail")
    }

    retrieve() {
        console.log("I retrieve mail")
    }

    sort() {
        console.log("I sort through mail")
    }
}

class Chef extends Person {
    constructor(nameParam, ageParam, ethnicityParam) {
        super(nameParam, ageParam, ethnicityParam)

    }

    cooking() {
        console.log("I cook everything")
    }

    chopping() {
        console.log("I chop vegetables")
    }

    serving() {
        console.log("I serve my guests")
    }


}



const billy = new PostalWorker("Billy", "45", "asian")

console.log(billy)

billy.deliver()
billy.retrieve()
billy.sort()
billy.sleeping()
billy.working()
billy.playing()

const rebecca = new PostalWorker("Rebecca", "22", "white")

console.log(rebecca)

rebecca.deliver()
rebecca.retrieve()
rebecca.sort()
rebecca.sleeping()
rebecca.working()
rebecca.playing()

const freddie = new Chef("Freddie", "30", "black")

console.log(freddie)

freddie.cooking()
freddie.chopping()
freddie.serving()
freddie.sleeping()
freddie.working()
freddie.playing()

const jenny = new Chef("Jenny", "35", "Latina")

console.log(jenny)

jenny.cooking()
jenny.chopping()
jenny.serving()
jenny.sleeping()
jenny.working()
jenny.playing()

