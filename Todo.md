# TODO

List of changes and implementations for the portfolio website

## UI changes

### Navbar

- [ ] Add the theme switcher to the navbar

  - [ ] Reimplement the theme function using the session cookie in the navigator
  - [ ] Make sure the onMount() is loading properly the theme cookie

- [ ] Change disposition of the navbar to have in this order : **burger menu** | Shaamallow | theme switcher
- [ ] Have a menu come from the left when the burger menu is clicked

### Home

- [ ] Add dynamic background to the home page to get attention (small cubes reactive to the mouse position)
- [ ] Add fading animation for the cards on the home page
  - [ ] Instead of raw code for everything, use the OnMount behaviour to load the data and the cards
  - [ ] Add fading animations for everything on the home page (Start description, cards and else)

## Content changes

### About me

- [ ] Add a picture of me
- [ ] Add a short description of me
- [ ] Add a my CV
  - [ ] Create a display for passions, experiences, education, skills and languages
  - [ ] Find how to serve a pdf file from the server
- [ ] Find a format for the blog (might be useful to use [QWER](https://github.com/kwchang0831/svelte-QWER))
- [ ] Add much more projects cards to the projects section
  - [ ] Find a meta data format for projects
