package com.xfactor.openlibrary.controllers;

// import java.util.ArrayList;
// import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.xfactor.openlibrary.Domain.Books;
import com.xfactor.openlibrary.Repositories.BookRepository;


// import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping("book")
public class BookController {

    private BookRepository bookRepository;

    

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // List<Books> lBooks = new ArrayList<>();

    @PostMapping("/saveBook")
    public Books saveBook(@RequestBody Books book)
    {
        // lBooks.add(book);
        bookRepository.save(book);
        return book;
    }

    @GetMapping("/getAll")
    public List<Books> getAllBooks()
    {
        return bookRepository.findAll();
    }

    @GetMapping("/findbyid/{id}")
    public Books findById(@PathVariable Long id)
    {
        if(id != null)
        {
            Optional<Books> optionalOfBook = bookRepository.findById(id);
            if(optionalOfBook.isPresent())
            return optionalOfBook.get();
        }
        return null;
    }

    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id)
    {
        bookRepository.deleteById(id);
    }

    @GetMapping("/findbyisbn/{isbn}")
    public List<Books> findByISBN(@PathVariable String  isbn)
    {
            List<Books> listbooks = bookRepository.findByIsbn(isbn);
            return listbooks;
    }

    @GetMapping("/findByNameAndIsbn/{name}/{isbn}")
    public List<Books> findByNameAndIsbn(@PathVariable String name, @PathVariable String isbn)
    {
        List<Books> lb1 = bookRepository.findByNameAndIsbn(name, isbn);
        return lb1; 
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return bookRepository.count();
    }

}