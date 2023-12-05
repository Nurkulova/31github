from bank_account import *

Ch = BankAccount(1000, "Ch")
Sa = BankAccount(1000, "Sa")

Ch.getBalance()
Sa.getBalance()

Sa.deposit(500)

Ch.withdraw(10000)
Ch.withdraw(100)

Ch.transfer(10000, Sa)
Ch.transfer(100, Sa)

Jim = InterestRewardsAcct(1000, "Jim")

Jim.getBalance()

Jim.deposit(100)

Jim.transfer(100,Ch)

Ka = SavingsAcct(1000, "Ka")

Ka.getBalance()

Ka.deposit(100)

Ka.transfer(10000,Sa)
Ka.transfer(100,Sa)


