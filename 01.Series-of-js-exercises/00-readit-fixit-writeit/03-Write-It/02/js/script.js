const movies = [
  'Crown', 'Big Bang Theory', 'Avatar', 'History of WWII', 'Young Sheldon',
]

const wrapText = (content, tag) =>{
    return `<${tag}>${content}</${tag}>`;
}

const createMovieList = (movies) =>{
    return `
    <ul>${movies
      .reverse()
      .map(movie => movie.toLowerCase())
      .map(movie => wrapText(movie, 'li')).join(``)}
    </ul>
    `
};

document.write(createMovieList(movies));
