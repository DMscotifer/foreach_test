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

// Bank.prototype.accountByName = function(name){
//   return this.accounts.filter(function(account){
//     return account.name === name;
//   })[0];
// }

// Bank.prototype.accountByName = function(name) {
//   return this.accounts.find((account) => {
//     return account.name === name
//   });
// }

// Bank.prototype.accountByName = function(name) {
// return this.accounts.find(function(account) {
//   return account.name === name
// });
// }

// Bank.prototype.largestAccount = function() {
//   let result;
//   var maximum = 0;
//   this.accounts.forEach(function(account){
//   if(account.value > maximum) {
//     maximum = account.value;
//     result = account;
//   }
//   });
//   return result;
// }

Bank.prototype.largestAccount = function() {
  this.accounts.sort(function(a, b) {
    return b.value - a.value;
  })
  return this.accounts[0];
}

Bank.prototype.payInterest = function() {
  var interest = 0;
  this.accounts.forEach(function(account){
    interest = account.value * 0.1;
    account.value += interest;
  })
}

Bank.prototype.businessAccounts = function() {
  let result = [];
  this.accounts.forEach(function(account){
    if(account.type === "business"){
      result.push(account);
    }
  })
  return result;
}

// Bank.prototype.totalValue = function() {
//   var result = 0;
//   this.accounts.forEach(function(account) {
//     result += account.value;
//   })
//   return result;
// }

Bank.prototype.totalValue = function() {
  return this.accounts.reduce(function(sum, account){
    return sum + account.value;
  }, 0);
};

Bank.prototype.averageValue = function() {
  var result = this.totalValue() / this.accounts.length;;
  return result;
}

module.exports = Bank;
