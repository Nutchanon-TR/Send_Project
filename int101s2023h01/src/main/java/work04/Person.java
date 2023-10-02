package work04;
public class Person {
    private int id;
//constructor   
    public Person(int id) {
        this.id = id;
    }
    
     public int getId(){
         return this.id;
     }
     
     public void setId(int id){
         this.id = id;
     }

    @Override
    public String toString() {
        //Change Int to String
        return "Person [id=" + id + "]";
    }
     
     
      
     }
     

