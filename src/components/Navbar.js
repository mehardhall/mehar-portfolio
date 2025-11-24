export function createNavbar() {
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  `;
  return nav;
}
