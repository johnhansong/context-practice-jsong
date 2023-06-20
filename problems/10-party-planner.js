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
			console.log("Gotta add people to the guest list")
		} else if (this.guestList.length === 1) {

			console.log(`Welcome to the party ${name1}`)
		} else {
			const modArr = this.guestList.slice(1)
			modArr.reduce((acc) => acc)
			console.log(`Welcome to the party ${name1}`)
		}
	}

}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
