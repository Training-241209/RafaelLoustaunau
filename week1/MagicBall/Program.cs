
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Welcome to the Magic Ball!");


        Console.WriteLine("Think about youre question, and type something");

        string? userInput = Console.ReadLine();

        if(!string.IsNullOrEmpty(userInput)){
            Console.WriteLine("the magic ball says :\n");
            GetPrediction();
        }
        else{
            Console.WriteLine("Type Something!");
            Main(args);
        }

    }

    private static void GetPrediction()
    {

        string [] predictions = {"things","other things"};
        throw new NotImplementedException();
    }
}

