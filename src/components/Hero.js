export function createHero() {
  const section = document.createElement('section');
  section.id = 'hero';
  section.innerHTML = `
    <h1>Hi, I'm Mehar Dhall</h1>
    <p>Welcome to my portfolio website</p>
    <img src="/assets/images/Mehardhall.jpg" alt="Mehar Dhall">
  `;
  return section;
}
