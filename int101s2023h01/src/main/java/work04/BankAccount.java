package work04;
public class BankAccount {
    private int number;
    private Person owner;
    private double balance;
    
    //Constructor
    public BankAccount(int number,Person owner){
        this.number = number;
        this.owner = owner;
    }
    
    //Getter
    public Person getOwner(){
        return this.owner;    
    }
    
    public double getBalance(){
        return this.balance;
    }
        
    public double deposit(double amount){
        this.balance += amount; //balance + amount = amount
        return amount;
    }
    
    public double withdraw(double amount){
        this.balance -= amount; //balance - amount = amount
        return amount;
    }
  
    
     public void transfer(double amount,BankAccount account){
         this.balance -= amount;
         account.balance += amount;
     }

    @Override
    public String toString() {
        return "BankAccount [number=" + number + ", owner=" + owner + ", balance=" + balance + "]";
    }     
     
     
}
