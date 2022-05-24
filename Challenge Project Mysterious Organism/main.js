// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}

// Factory function for creating objects
const pAequorFactory = (specimenNum, dna) => {
    return {
        _specimenNum: specimenNum,
        _dna: dna,
        mutate() {
            randombase = Math.floor(Math.random() * 15);
            dnaBasesNoA = ['T', 'C', 'G'];
            dnaBasesNoT = ['A', 'C', 'G'];
            dnaBasesNoC = ['A', 'T', 'G'];
            dnaBasesNoG = ['A', 'T', 'C'];
            if (this._dna[randombase] === 'A') {
                this._dna[randombase] = dnaBasesNoA[Math.floor(Math.random() * 3)];
            } else if (this._dna[randombase] === 'T') {
                this._dna[randombase] = dnaBasesNoT[Math.floor(Math.random() * 3)];
            } else if (this._dna[randombase] === 'C') {
                this._dna[randombase] = dnaBasesNoC[Math.floor(Math.random() * 3)];
            } else {
                this._dna[randombase] = dnaBasesNoG[Math.floor(Math.random() * 3)];
            };
            return this._dna
        },
        compareDNA(pAequor) {
            numCommon = 0;
            for (let i = 0; i < pAequor['_dna'].length; i++) {
                if (pAequor._dna[i] === this._dna[i]) {
                    numCommon++;
                }
            }
            precentCommon = ((numCommon / 15) * 100).toFixed(2);
            console.log(`Specimen #${this._specimenNum} and Specimen #${pAequor._specimenNum} have ${precentCommon}% DNA common.`)
        },
        willLikelySurvive() {
            cAndGCounter = 0;
            for (let i = 0; i < this._dna.length; i++) {
                if (this._dna[i] === 'C' || this._dna[i] === 'G') {
                    cAndGCounter++;
                }
            }
            if (cAndGCounter < 9) {
                return false;
            } else {
                return true;
            }
        }
    };
};
// Create 30 pAequor are most likely to survive
const survivors = [];
while (survivors.length < 30) {
    pAequorNum = survivors.length + 1;
    newPAequor = pAequorFactory(pAequorNum, mockUpStrand());
    if (newPAequor.willLikelySurvive() === true) {
        survivors.push(newPAequor);
    }
}
console.log(survivors);

const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
console.log(test1._dna);
console.log(test2._dna);
test1.compareDNA(test2);
console.log(test1.willLikelySurvive());
console.log(test2.willLikelySurvive());