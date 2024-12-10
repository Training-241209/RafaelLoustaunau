
/*

FizzBuzz, we have an integer, for every integer that is less than n, we have a few rules
:
3 % 5 
Print FIZZ BUZZ

PRINT FIZZ I/3
PRINT BUZZ I/5
PRINT I IF NON OF IT



*/

/*
//acess modifiers

public its the most open access modifier, all classes in the project can access it
private- its the most closed access modifier, ony avaible to the class itself
internal -its limited to a class and its memeber, but not static members 
protected - it's available for class and its children/subclasses to access

static keyword - means we dont have an object/instance to call method, or acess static members,
and we static members value shared 

*/

public static void FizzBuzz(int number){

    int counter=1;

    while(counter <= number){

        if(counter % 3==0 && counter % 5==0){
            Console.WriteLine("FizzBuzz");
        }
        else if(counter %3==0){
            Console.WriteLine("FIZZ");
        }
        else if(counter %5==0){
            Console.WriteLine("BUZZ");
        }
        else{
            Console.WriteLine(counter);
        }
        counter++;
    }
}