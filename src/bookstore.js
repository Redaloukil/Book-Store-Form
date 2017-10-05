import React , {Component} from 'react';

class Booklib extends Component {
    constructor(props){
        super(props);
        //state contains all books and selected books by checking
        this.state={
            books : [
                { name: 'Zero to One', author: 'Peter Thiel' },
                { name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
                { name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
            ],
            selectedBooks :[],
            error : false,
            
        }
        this.renderBook = this.renderBook.bind(this);
        this.handleSelectedBooks = this.handleSelectedBooks.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderError = this.renderError.bind(this);
    }
    renderError(){
        if (this.state.error !== false){
            return(
                <div className="alert alert-danger">
                        {this.state.error}
                </div>
            )
        }
    }
    //By checking,add the book to selectedbook array in state
    handleSelectedBooks(event) {
        var selectedBooks = this.state.selectedBooks;
        //if book name exists on selected books or not
        var index = selectedBooks.indexOf(event.target.value);
        
        if (event.target.checked) {
            if (index === -1)
                selectedBooks.push(event.target.value);
            } else {
                selectedBooks.splice(index, 1);
            }
            console.log(selectedBooks);
            this.setState({selectedBooks: selectedBooks });
    }
    //submitting the form
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.selectedBooks.length === 0){
            this.setState({error:"you have to choose at least one book"})
        }else{
            this.setState({error:false});
            this.props.updateFormData({ selectedBooks:
            this.state.selectedBooks });
        }
        
    }
    //render the book and checkboxes on list 
    renderBook(book) {
        return(
            <div className="checkbox">
                <label>
                    <input type="checkbox" onChange={this.handleSelectedBooks} value={book.name}/>{book.name} -- {book.author}
                </label>
            </div>
        );
    }
    render(){
        return(
            <div>
                <h1>
                    Choose from wide variety of books available in our store.
                </h1>
                 <h3> Choose from wide variety of books available in our store</h3>
                <form onSubmit={this.handleSubmit}>
                    {this.renderError()}
                    {this.state.books.map((book) => {
                        return this.renderBook(book) })
                    }
                    <input type="submit" className="btn btn-success"/>
                </form>
            </div>
        );
    }
}
export default Booklib;
 
