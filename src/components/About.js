export function createAbout() {
  const section = document.createElement('section');
  section.id = 'about';
  section.innerHTML = `
    <h2>About Me</h2>
    <p>This is a short intro about me.</p>
  `;
  return section;
}
