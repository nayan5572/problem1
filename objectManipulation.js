// object manipulation
const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Dune", author: "Frank Herbert", year: 1965 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "Neuromancer", author: "William Gibson", year: 1984 },
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    year: 1969,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    year: 2011,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const getBooksTitle = (books) => {
  return books.map((book) => book.title);
};

const titles = getBooksTitle(books);
console.log(titles);
