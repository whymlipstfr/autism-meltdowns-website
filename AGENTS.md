# What the website is for

To spread awareness about autism and meltdowns, which is something people with autism spectrum disorder face. It is also to provide resources for caregivers and the people they care for who have ASD to improve their train journey experience.

# Website rules

- This is a static HTML, CSS, and JavaScript website with no build step.
- Follow the approved Figma designs and the existing website styles.
- The site is designed for mobile. Keep the mobile UI, including the top navigation, on tablet and desktop screens.
- Use existing copy and assets. Do not invent or add content unless asked.
- Keep changes focused on the requested work; preserve unrelated content and assets.

# Pages and assets

- `index.html` — home page
- `autism-meltdowns.html` — Learn More about Autism and Meltdowns
- `what-else.html` — What Else Can You Do?
- `assets/` — website images and other assets

# Design rules

- Background: `#023924`
- Headers: `#F29BC6`
- Text: `#FFFFFF`
- Header font: Monomaniac One
- Body font: DM Sans
- Keep content left-aligned with generous white space.
- Do not use gradients, drop shadows, or centered body text.
- Preserve the Vivid and Calm colour modes. Calm pink is `#E4C1CC`.

# Features and interactions

- Buttons should change colour when pressed.
- Scrolling should use smooth, gentle animation.
- Keep the top navigation fixed while scrolling.
- Keep the bottom scroll progress bar synchronized with scrolling in both directions.
- The top bunny icon on the home page returns to the start of the home page. Top bunny icons on the other pages return to the home page.
- Bottom bunny icons are decorative and should not navigate when clicked.
- Keep the “Learn More” buttons on the home page; do not add them to the navigation dropdown.
- Keep the “Train Scenario Activity with Emotion Cards” link pointed to `https://emotion-cards-carousel.vercel.app/`.

# GitHub Desktop workflow

- Commit and push only when asked.
- Before committing, review changed and untracked files and include only files related to the requested work.
- In GitHub Desktop, select this repository and the intended branch, enter a clear commit summary, commit the selected files, then push to `origin`.
- Confirm GitHub Desktop reports the push is complete and there are no unpushed commits.

# Vercel workflow

- The production project is `asd-meltdowns`, served at `https://asd-meltdowns.vercel.app/`.
- Pushing to `main` triggers the connected production deployment.
- Deploy only when asked. After pushing, confirm Vercel has a production deployment for that commit with status `READY`.
- If the automatic deployment does not start, inspect the project and deployment status before taking another deployment action.
- Do not deploy when asked to push without deploying.
