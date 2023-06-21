class PartyPlanner {
	constructor(guestList) {
		this.guestList = [];
	}

	addToGuestList(name) {
		this.guestList.push(name)

	}

	throwParty() {
		const name1 = this.guestList[0];
		if (!this.guestList.length) {
			return "Gotta add people to the guest list"
		} else if (this.guestList.length === 1) {

			return `Welcome to the party ${name1}`
		} else {
			const modArr = this.guestList.slice(1)
			const newStr = modArr.reduce((acc, el) => acc + `and ${el}`, `Welcome to the party ${name1} ` )
			return newStr
		}
	}
}


const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
