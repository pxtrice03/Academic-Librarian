// Transforms a text to a slug usable in the URL
const slugify = (txt) =>
    txt.normalize('NFD') // separates letters and their accents
    .replace(/[\u0300-\u036f]/g, "") // deletes the isolated accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // spaces, apostrophes, symboles are converted to a hiphen ('-')
    .replace(/^-+|-+$/g, "") // removes hiphens found at the beginning and at the end

export default slugify;
