# barker - Content Management Guide

## Quick Start: Adding a New Article

### Method 1: Using the Template (Recommended)

1. Copy `template-article.html` to reference the structure
2. In `index.html`, find the `<!-- Articles -->` section (around line 360+)
3. Copy an existing `<div class="day">...</div>` block
4. Paste it and modify:
   - **Title**: `<a class="postTitle2">Your Title</a>`
   - **Date**: `<div class="postDesc">` section
   - **Content**: Everything inside `<div id="cnblogs_post_body">`

### Article Structure

```html
<div class="day">
    <div class="postTitle">
        <a class="postTitle2" href="#">Your Article Title</a>
    </div>

    <div class="postCon">
        <div class="c_b_p_desc">
            Brief excerpt/description
        </div>
    </div>

    <div class="postDesc">
        Posted on YYYY-MM-DD | Tags: Physics, Quantum
    </div>

    <div class="postText">
        <div id="cnblogs_post_body">
            <h2>Introduction</h2>
            <p>Your content here...</p>

            <!-- LaTeX Math -->
            <p>$$ E = mc^2 $$</p>
            <p>Inline math: $E = mc^2$</p>

            <!-- Footnotes -->
            <p>Reference <span class="footnote-ref">[1]</span></p>

            <div class="footnotes-section">
                <h3>References</h3>
                <ol class="footnotes">
                    <li id="fn1">First reference</li>
                </ol>
            </div>
        </div>
    </div>
</div>
```

## LaTeX Math Support

MathJax 3 is configured and ready to use:

- **Inline math**: `$E = mc^2$`
- **Display math**: `$$ E = mc^2 $$`
- **Numbered equations**: Use `\begin{equation}...\end{equation}`

Examples:
```
Inline: The energy $E$ equals mass times $c^2$.

Display:
$$
\psi(x) = A e^{ikx}
$$

Numbered:
\begin{equation}
i\hbar\frac{\partial}{\partial t}\Psi = \hat{H}\Psi
\end{equation}
```

## Formatting Tips

### Headers
```html
<h2>Main Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
```

### Lists
```html
<ul>
    <li>Unordered item</li>
</ul>

<ol>
    <li>Ordered item</li>
</ol>
```

### Code Blocks
```html
<pre><code>def hello():
    print("Hello!")
</code></pre>
```

### Footnotes
```html
<p>Text with reference <span class="footnote-ref">[1]</span>.</p>

<ol class="footnotes">
    <li id="fn1">Reference details</li>
</ol>
```

## Mobile Optimization Tips

1. **Keep paragraphs short** - break long text into smaller chunks
2. **Use subheadings** - frequent `<h2>` and `<h3>` headers
3. **Large touch targets** - buttons are automatically 48px+ on mobile
4. **Readable font sizes** - base font is 1.1rem (17.6px)

## Common Tasks

### Change Site Title
Edit in `index.html` (around line 237-240):
```html
<h1><a id="Header1_HeaderTitle" href="https://boyoboyoyo.github.io/v/">barker</a></h1>
<h2>Blood Creation Platform</h2>
```

### Add Navigation Link
In the navigation section (around line 250-260):
```html
<li><a id="MyLinks1_HomeLink" href="https://boyoboyoyo.github.io/v/">Home</a></li>
<li><a id="MyLinks1_Link2" href="#">New Link</a></li>
```

### Update Music
Replace the music file in `siryou/` folder and update in `index.html` (line 605):
```html
<audio id="audio-player" src="siryou/your-new-song.mp3"></audio>
```

## Deployment

After making changes:

```bash
git add .
git commit -m "Add new article: [title]"
git push
```

GitHub Actions will automatically deploy to https://boyoboyoyo.github.io/v/ within 1-2 minutes.

## File Structure

```
/home/higuc/v/
├── index.html              # Main site file (all articles here)
├── template-article.html  # Article template
├── CONTENT-GUIDE.md       # This file
├── css/
│   ├── cute-cnblogs2.css  # Main stylesheet
│   └── ...
├── js/
│   ├── jquery2.min.js
│   ├── milusidebar.js     # Sidebar functionality
│   └── ...
├── siryou/
│   └── *.mp3             # Music files
└── icon/
    └── *.svg             # Icons
```

## Performance Tips

1. **Limit article length** - Consider splitting very long posts
2. **Optimize images** - Use WebP format, compress before adding
3. **Minimize animations** - Already disabled heavy animations for scroll performance
4. **Test on mobile** - Use browser DevTools device emulation

## Troubleshooting

### Math not rendering
- Check for syntax errors in LaTeX
- Ensure MathJax script is loaded (line 39 in index.html)
- Wait for page to fully load

### Sidebar not working on mobile
- Check console for JavaScript errors
- Ensure milusidebar.js is loaded
- Try clearing browser cache

### Scroll issues
- Heavy animations have been disabled
- Check browser console for errors
- Test in different browsers

## Getting Help

- GitHub Issues: https://github.com/boyoboyoyo/v/issues
- Site URL: https://boyoboyoyo.github.io/v/
