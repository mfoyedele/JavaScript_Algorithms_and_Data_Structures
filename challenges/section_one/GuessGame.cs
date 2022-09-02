using System.Text;
using System.Threading Tasks;

namespace GuessGame
{
 class Program 
  {
     static void Main(string[] args)
   {
     string secretWord = "coding"
     string guess = "";
     int guessCount = 0;
     int guessLimit = 3;
     bool outOfGuess = false;

     while (guess != secretWord && !outOfGuess)
     {
      if (guessCount < guessLimit)
      {
        Console.Write("Enter guess: ");
        guess = Console.ReadLine();
        guessCount++;
      }
      else
      {
        outOfGuess = true;
      }
     }
     if (outOfGuess)
     {
      Console.Write("You Lose!");
     }
     else
     {
      Console.Write("You Win!");
     }
      Console.ReadLine();
    }
  }
 }


