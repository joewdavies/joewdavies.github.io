// Footer year
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Assemble the email link at runtime so the address isn't in the HTML for scrapers
const email = document.getElementById('email');
if (email) {
  const address = `${email.dataset.user}@${email.dataset.domain}`;
  email.href = `mailto:${address}`;
  email.textContent = address;
}
