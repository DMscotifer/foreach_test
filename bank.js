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

Bank.prototype.payInterest = function() {
  var interest = 0;
  this.accounts.forEach(function(account){
    interest = account.value * 0.1;
    account.value += interest;
  })
}

module.exports = Bank;
