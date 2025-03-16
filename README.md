# Arshmeen Kaur - Portfolio Website

A modern, interactive portfolio website inspired by Brittany Chiang's design. This website showcases my skills, experience, and projects as a Full Stack Developer.

## Features

- Responsive design for all devices
- Interactive UI elements with smooth animations
- Dark theme with elegant accents
- Side navigation and social links
- Experience tabs with interactive switching
- Featured project showcases
- Project cards for additional works
- Animated glitch text effect
- Printable resume

## Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- Font Awesome for icons
- Google Fonts (Inter & Fira Code)

## Setup Instructions

1. Clone this repository
2. Open index.html in your browser to view the site
3. Customize the content in the HTML files to match your information
4. Add your own images to the `images` folder
5. Update the links to your social media accounts

## Customization

### Colors and Theme

The color scheme can be modified in the `css/style.css` file by changing the CSS variables in the `:root` section:

```css
:root {
    --bg-primary: #0a192f;
    --bg-secondary: #112240;
    --text-primary: #ccd6f6;
    --text-secondary: #8892b0;
    --accent: #64ffda;
    /* ... other variables */
}
```

### Adding Projects

To add more projects to the grid, copy the project card HTML structure in the `index.html` file and customize it:

```html
<div class="project-card">
    <div class="project-card-header">
        <i class="far fa-folder-open folder-icon"></i>
        <div class="project-card-links">
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
    <h3>Project Title</h3>
    <p>Project description goes here</p>
    <div class="project-tech">
        <span>Technology 1</span>
        <span>Technology 2</span>
        <span>Technology 3</span>
    </div>
</div>
```

## License

This project is open source and available under the MIT License.

## Credits

- Design inspired by [Brittany Chiang](https://brittanychiang.com/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## Contact

For any inquiries, please reach out to me at arshmeenk19@gmail.com 