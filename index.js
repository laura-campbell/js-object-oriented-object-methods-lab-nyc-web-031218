function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training
  this.veto = function(){
    return "No, I must disagree"}
  this.approve = function() {
    return "You can do that!"}
  this.doCharity = function() {
    return "I like to help people."}
  this.releasePressStatement = () => "You will see great things from Scuber."
  this.sayHi = () => `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`
}
