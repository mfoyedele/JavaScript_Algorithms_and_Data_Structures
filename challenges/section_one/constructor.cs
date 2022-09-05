using System;

namespace Constructor
{ 
 class Book
 {
    public string title;
    public string author;
    public int pages;

    public Book(string aTitle, string aAuthor, int aPages)
    {
       title = aTitle;
       author = aAuthor;
       pages = aPages;
    }
 }
}

using System;

namespace Constructor
 {
 class Program
  {
     static void Main(string[] args)
     {
       Book book1 = new Book("Harry Potter", "JK Rowling", 400);
       Book book2 = new Book("Lord Of the Rings", "Tolkein", 700);
       Book book3 = new Book();

       Console.WriteLine(book1.title)

       Console.ReadLine();
    }
 }
}