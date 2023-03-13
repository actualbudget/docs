const matter = require('gray-matter');
const fs = require('fs');
const path = require('path');
const listify = require('listify');

const categoryOrder = ['Features', 'Enhancements', 'Bugfix', 'Maintenance'];
const notesPath = path.join(
  path.dirname(__dirname),
  'docs',
  'Release-Notes.md',
);

if (process.argv.length < 5) {
  console.error(
    'Usage: node parse-release-notes.js <version> <path/to/actual> <path/to/actual-server>',
  );
  process.exit(1);
}

const version = process.argv[2];

const newNotes = [
  `## ${version}`,
  `**Docker tag: ${version}**`,
  `[FIXME! Add highlights here]`,
  printNotes(
    'Actual',
    parseReleaseNotes(
      path.join(process.argv[3], 'upcoming-release-notes'),
      'actual',
    ),
  ),

  printNotes(
    'Actual Server',
    parseReleaseNotes(
      path.join(process.argv[4], 'upcoming-release-notes'),
      'actual-server',
    ),
  ),
].join('\n\n');

const currentNotes = matter(fs.readFileSync(notesPath, 'utf-8'));

fs.writeFileSync(
  notesPath,
  '---' + currentNotes.matter + '\n---\n\n' + newNotes + currentNotes.content,
);

function parseReleaseNotes(dir, repo) {
  const notes = fs
    .readdirSync(dir)
    .filter(f => f.match(/^\d+\.md$/))
    .map(name => {
      const content = fs.readFileSync(path.join(dir, name), 'utf-8');
      const { data, content: body } = matter(content);
      const number = name.replace('.md', '');
      const authors = listify(
        data.authors.map(a => `[${a}]`),
        { finalWord: '&' },
      );
      return {
        category: data.category,
        value: `- [#${number}](https://github.com/actualbudget/${repo}/pull/${number}) ${body.trim()} \u{2014} thanks ${authors}`,
      };
    });

  return notes.reduce((acc, note) => {
    if (!acc[note.category]) {
      console.log(`WARNING: Unrecognized category "${note.category}"`);
      acc[note.category] = [];
    }
    acc[note.category].push(note.value);
    return acc;
  }, Object.fromEntries(categoryOrder.map(c => [c, []])));
}

function printNotes(name, notes) {
  const printedNotes = Object.entries(notes).map(
    ([category, values]) => `#### ${category}\n\n${values.join('\n')}`,
  );
  return `### ${name}\n\nVersion: ${version}\n\n${printedNotes.join('\n\n')}`;
}
