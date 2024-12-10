namespace ExpenseTracker;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hello, World!");
        int selectedOption = getUserOption();

        switch(selectedOption){
            case 1:
            Console.WriteLine("User selected to add an expense");
            break;
            case 2:
             break;
            Console.WriteLine("user selected to view all expenses");
            case 4: 
            Console.WriteLine("User selected to delete an expense");
            break;
            default :
            Console.WriteLine("Invalid option! Please try Again");
        }
    }

    public static void Greeting(){

        Console.WriteLine("Welcome to the expense Tracker!");
        Thread.Sleep(500);
        Console.WriteLine("Select on the folloowing options: \n");

        DisplayOptions();
    }

    public static void DisplayOptions(){
        Console.WriteLine("1. Add Expense");
        Console.WriteLine("2. View Expenses");
        Console.WriteLine("2. Edit Expenses");
        Console.WriteLine("2. Delete Expenses");
        Console.WriteLine("5. Save to a file");
        Console.WriteLine("Exit");
      
    }

    public int getUserOption(){
        Console.WriteLine("Select the option: \n");
        string? userInput =Console.ReadLine();


    try {
    return Int32.Parse(userInput);
    }
    catch(FormatException e){
    Console.WriteLine("Invalid input! Make sure you typed a number");
    return getUserOption();
    }

    }
    }
