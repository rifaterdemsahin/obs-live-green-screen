import glob
import re

for filepath in glob.glob('*.html'):
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove the <nav class="top">...</nav> block
    # Using regex to match from <nav class="top"> to </nav>
    content = re.sub(r'<nav class="top">.*?</nav>\n?', '', content, flags=re.DOTALL)

    # Inject script right before </body>
    if '<script src="assets/nav.js"></script>' not in content:
        content = content.replace('</body>', '  <script src="assets/nav.js"></script>\n</body>')

    with open(filepath, 'w') as f:
        f.write(content)
