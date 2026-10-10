# Explore Ghana — Eyram Fenu
Web Technologies synthesis: five HTML pages, shared CSS and a small JavaScript trip calculator. AI assisted with code generation and explanation. Review and understand every file before the viva.

## Run with XAMPP
1. Copy the explore-ghana folder into C:\xampp\htdocs.
2. Start Apache in the XAMPP Control Panel.
3. Open http://localhost/explore-ghana/ in your browser.
No PHP, database, npm or installation is needed. The site also works by opening index.html directly.

## Files
- index.html: home, hero illustration and cards
- destinations.html: destination cards and comparison table
- experiences.html: activity ideas and lists
- plan.html: labelled budget form and result
- about.html: project description, FAQ and form demonstration
- css/style.css: shared presentation and responsive layout
- js/script.js: one budget function
- images/coast.svg: original decorative coastal illustration (not a photograph)

## Check the calculator
Defaults: 3 days, 2 travellers, 200 per night, 100 food per day, 300 group transport.
2 × (2 × 200 + 3 × 100) + 300 = GHS 1700.00.
One day: no overnight accommodation. Zero costs: result 0.00. Blank, negative and fractional days are blocked by HTML validation on submission.
Contact form validates and reloads the About page; it does not send messages. Fields deliberately have no name attributes so no entered data is placed in the URL.
Destination text is general inspiration; verify current access, schedules and prices independently before real travel.

## GitHub — complete these steps on your computer
1. Sign in to GitHub and create a repository called explore-ghana.
2. Select Add file > Upload files. Upload the CONTENTS of explore-ghana so index.html is at the repository root.
3. Commit with a descriptive message such as “Add five-page Explore Ghana synthesis website”.
4. Make your own small improvement, upload the changed file and commit with a message explaining it. Keep meaningful history; do not manufacture earlier commits.
5. Optional hosting: Settings > Pages > Deploy from a branch > main > / (root) > Save. Follow the URL GitHub provides.
GitHub upload and hosting have not been completed by this package. Use your lecturer’s required repository visibility.

## Viva guide
Read VIVA-GUIDE.md. Begin with HTML and CSS, then trace the calculator line by line.
