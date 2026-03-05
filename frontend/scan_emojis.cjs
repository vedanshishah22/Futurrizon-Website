const fs = require('fs');
const path = require('path');

// Regex for emoji characters
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu;

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else if (file.endsWith('.jsx')) {
            const content = fs.readFileSync(file, 'utf8');
            if (emojiRegex.test(content)) {
                results.push(file);
            }
        }
    });
    return results;
}

try {
    const files = walk('./src/');
    console.log(files.map(f => path.relative(process.cwd(), f)).join('\n'));
} catch (e) {
    console.error(e);
}
