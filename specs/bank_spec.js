var assert = require('assert');
var Bank = require('../bank.js');
var Account = require('../account.js');

describe('Bank', function() {

  var account1;
  var account2;
  var account3;
  var account4;
  var bank;

  beforeEach(function() {
    account1 = new Account("Ally", 60, 'personal');
    account2 = new Account("Alan", 10, 'business');
    account3 = new Account("Upul", 80, 'personal');
    account4 = new Account("Kane", 5, 'business');
    bank = new Bank();
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    bank.addAccount(account4);
  })

  it("should be able to add account", function() {
    assert.strictEqual(bank.accounts.length, 4);
  });

  it("should be able to find an account by owner name", function() {
    assert.deepEqual(bank.accountByName("Kane"), account4);
  });

  it("should be able to find an account with highest value", function() {
    assert.deepEqual(bank.largestAccount(), account3);
  });

  xit("should be able to add 10% interest to all accounts", function() {
    var interestPaid1 = new Account("Ally", 66, 'personal');
    var interestPaid2 = new Account("Alan", 11, 'business');
    var interestPaid3 = new Account("Upul", 88, 'personal');
    var interestPaid4 = new Account("Kane", 5.5, 'business');
    var expected = [interestPaid1, interestPaid2, interestPaid3, interestPaid4]

    bank.payInterest();

    assert.deepStrictEqual(bank.accounts, expected)
  });

  xit("should be able to return all business accounts", function() {
    assert.deepStrictEqual(bank.businessAccounts(), [account2, account4]);
  });

  xit("should be able to find total value of all acounts", function() {
    assert.strictEqual(bank.totalValue(), 155);
  });

  xit("should be able to find the average value of accounts", function() {
    assert.strictEqual(bank.averageValue(), 38.75);
  });

});
