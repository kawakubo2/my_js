const Bookshelf = function(books) {
    this.books = books;
}

Bookshelf.prototype.getByTitle = function(title) {
    let result = [];
    for (let book of this.books) {
        if (book.indexOf(title) > -1) {
            result.push(book);
        }
    }
    return result;
};

Bookshelf.prototype.getNumber = function() {
    return this.books.length;
}

Bookshelf.prototype.add = function(title) {
    this.books.push(title);
}

let bs1 = new Bookshelf(['独習PHP', 'JavaScript本格入門', '10日でおぼえるjQuery入門教室']);
bs1.add('10日おぼえるPHP入門教室');
bs1.add('独習Python');
bs1.add('独習C#');

let nyumon = bs1.getByTitle('入門');
console.log(nyumon);
