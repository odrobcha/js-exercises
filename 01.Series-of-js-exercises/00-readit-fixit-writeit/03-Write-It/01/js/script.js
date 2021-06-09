const movies = [
  'Crown', 'Big Bang Theory', 'Avatar', 'History of WWII', 'Young Sheldon',
]

const wrapText = (content, tag) =>{
    return `<${tag}>${content}</${tag}>`;
}

const createMovieList = (movies) =>{
    return `
    <ul>${movies
      .map(movie => wrapText(movie, 'li')).join(``)}
    </ul>
    `
};

document.write(createMovieList(movies));
