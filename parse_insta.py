import re

with open('src/assets/images/insta_page.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Look for image URLs in Instagram source
patterns = [
    r'"display_url":"(https://[^"]+)"',
    r'"thumbnail_src":"(https://[^"]+)"',
    r'src="(https://[^"]+scontent[^"]+)"',
]
found = set()
for pat in patterns:
    matches = re.findall(pat, content)
    for m in matches:
        cleaned = m.replace('\\u0026', '&').replace('\\\\u0026', '&')
        found.add(cleaned)

if found:
    for url in list(found)[:15]:
        print(url[:150])
else:
    print('No image URLs found')
    print('First 1000 chars:', content[:1000])
