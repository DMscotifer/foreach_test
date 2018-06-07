var Bank = function() {
  this.accounts = [];
}

Bank.prototype.addAccount = function (account) {
  this.accounts.push(account);
}

Bank.prototype.accountByName = function(custName) {
  let result;
  this.accounts.forEach(function(account){
    if(account.name === custName){
        result = account;
    }
  })
  return result;
}

Bank.prototype.largestAccount = function() {
  let result;
  var maximum = 0;
  this.accounts.forEach(function(account){
  if(account.value > maximum) {
    maximum = account.value;
    result = account;
  }
  });
  return result;
}

module.exports = Bank;
