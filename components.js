
const navbarHtml = `
<nav class="navbar glass-effect">
    <div class="wrap nav-container">
        <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
            <img src="assets/logo_mark.png" alt="TRAIN Lab Logo" style="height: 45px;">
            <span style="font-weight: 800; color: var(--text-primary); font-size: 1.25rem; letter-spacing: 1px;">TR<span style="color: var(--accent-cyan);">AI</span>N LAB</span>
        </a>
        <ul class="nav-links">
            <li><a href="research.html">Research</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="publications.html">Publications</a></li>
            <li><a href="talks.html">Talks</a></li>
            <li><a href="openings.html">Openings</a></li>
            <li><a href="awards.html">Awards</a></li>
            <li><a href="index.html#news">News</a></li>
            <li><a href="contact.html" class="btn btn-sm btn-primary" style="color: white;">Contact</a></li>
        </ul>
        <button class="mobile-menu-btn">
            <i data-lucide="menu"></i>
        </button>
    </div>
</nav>
`;

const footerHtml = `
<footer class="footer">
    <div class="wrap footer-container">
        <div class="footer-brand">
            <a href="index.html" class="logo" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
            <img src="assets/logo_mark.png" alt="TRAIN Lab Logo" style="height: 45px;">
            <span style="font-weight: 800; color: var(--text-primary); font-size: 1.25rem; letter-spacing: 1px;">TR<span style="color: var(--accent-cyan);">AI</span>N LAB</span>
        </a>
            <p style="margin-top: 10px;">Trustworthy and Resilient AI and Networks Lab</p>
            <p class="footer-address">Worcester Polytechnic Institute (WPI)<br>Worcester, MA 01609</p>
        </div>
        <div class="footer-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="research.html">Research</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="openings.html">Openings</a></li>
            </ul>
        </div>
        <div class="footer-contact">
            <h3>Contact Us</h3>
            <a href="mailto:cthomas2@wpi.edu" class="contact-link"><i data-lucide="mail"></i> cthomas2@wpi.edu</a>
            <p class="contact-desc">Interested in joining the lab or collaborating? Send us an email.</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 TRAIN Lab @ WPI. All Rights Reserved.</p>
    </div>
</footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("navbar-placeholder").innerHTML = navbarHtml;
    document.getElementById("footer-placeholder").innerHTML = footerHtml;
});
