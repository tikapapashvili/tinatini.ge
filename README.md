# Tinatin Papashvili — Personal Website

A lightweight static website designed for GitHub Pages.

## Files

- `index.html` — all page content
- `styles.css` — design and responsive layout
- `script.js` — mobile menu and current year
- `assets/` — place your portrait and logos here
- `CNAME` — custom domain for GitHub Pages

## Before publishing

### 1. Add your email
Open `index.html` and replace:

`YOUR-EMAIL@example.com`

with your real email address.

### 2. Add your portrait
Put your photo in:

`assets/tinatin.jpg`

Then replace the `portrait-placeholder` block in `index.html` with:

```html
<img class="portrait-image" src="assets/tinatin.jpg" alt="Tinatin Papashvili">
```

And add this to `styles.css`:

```css
.portrait-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 34px;
}
```

### 3. Add your real LinkedIn URL
Replace both placeholder `https://www.linkedin.com/` links in `index.html`.

### 4. Replace the sample testimonial
Use a real short client/student quote.

### 5. Optional: add client logos
Put logo files in `assets/` and replace the text-only client tiles with images.

## Publish on GitHub Pages — beginner steps

1. Create a GitHub account if you do not already have one.
2. Create a new repository. A good name is `tinatini.ge`.
3. Upload all files from this folder to the repository.
4. Open repository **Settings**.
5. Go to **Pages**.
6. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
7. Save.
8. GitHub will publish a temporary address like:
   `https://YOUR-USERNAME.github.io/tinatini.ge/`

## Connect tinatini.ge

The included `CNAME` file contains:

`tinatini.ge`

In your DNS provider you will need to point the domain to GitHub Pages. GitHub's recommended DNS records can change, so use the current GitHub Pages custom-domain documentation when you make the DNS change.

Important: keep the old website active until the GitHub Pages version is fully tested.

## Easy maintenance

For simple text changes:
1. Open `index.html` in GitHub.
2. Click the pencil/edit icon.
3. Change the text.
4. Click **Commit changes**.

GitHub Pages will automatically republish the site.
