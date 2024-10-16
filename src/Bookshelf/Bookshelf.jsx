//src/Bookshelf/Bookshelf.jsx
//!-- Imports
import {useState} from 'react';



//!--Main Function for Componant
const Bookshelf = () => {

    //!-- Construct States
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ])
    
    const[newBook, setNewBook] = useState({
        title: '',
        author: ''
    })
    
    //!-- Construct Handlers
    const handleInputChange = (event) => {
        // ... spreading an object then "," to add to that.
        setNewBook({...newBook, [event.target.name]: event.target.value});
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        // ... spreading an array then "," to add to that. Like calling any array, object, fucntion use brackets only as needed by that item.
        setBooks([...books, newBook])
    }
    

    //!-- Any Other Functions
    
    
    
    //!-- Render Content
    return(
        <>
            <div className="bookshelfDiv">
                <div className="formDiv">
                    <h3>Add a Book</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="title">Book Title</label>
                        <input 
                        name="title" 
                        id="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        />
                        <br />
                        <label htmlFor="author">Author</label>
                        <input 
                        name='author' 
                        id='author' 
                        value={newBook.author} 
                        onChange={handleInputChange}
                        />
                        <button type='submit' >Add New Book</button>
                    </form>
                </div>
                <div className="bookCardsDiv">
                    {books.map((book)=> {
                        return(
                            <div className='bookCard' key={book.title}>
                                <p>{book.title}</p>
                                <p>{book.author}</p>
                            </div>
                            
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}
        
export default Bookshelf;