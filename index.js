// code solution here
class President {
  constructor(name, politcalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politcalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }

  veto() {
    return "NO!"
  }

  passBill() {
    return "You can do that!"
  }

  doCharity() {
    return "I like to help people!"
  }

  conductPressInterview() {
    return "I am proud to be an American."
  }

  sayHi() {
    return "Hi, my name is ${this.name}. I am from ${this.homeSate}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}."
  }
}

var obama = new President('Barack', 'Democrat', '8', 'Hawaii');
obama.sayHi();
