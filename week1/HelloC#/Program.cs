
using System;
using System.Numerics; // We import our namespaces/libraries/classes with USING statement


namespace HelloC_; //file cabinet, we store our stuff in it

//our main class, all our coode  will be inside program entry point
class Program
{

    //This method is an entry poin of execution
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");

        //Build int data types in C#endregion

        //Integer/numeric
        int age= 45;
        double amountOfMoney=45.90;// general use, and more accurate
        float anotherFloating=50.50f; //less precision
        long veryLargeNumber = 9234123412334123;
        BigInteger veryLarge= 2342342323412341234;



        for(int i=0; i<10; i++){
            Console.WriteLine("Number "+i);
        }

        //Type Conversion

        

    }
}
