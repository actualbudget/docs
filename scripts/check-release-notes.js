// This is a self-contained script run by the "Check Release Notes"
// GitHub Action for the 'actual' and 'actual-server' repos.

const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');

console.log('::group::Installing gray-matter');
childProcess.execSync('npm install gray-matter', { stdio: 'inherit' });
console.log('::endgroup::');

const matter = require('gray-matter');

const expectedPath = `upcoming-release-notes/${process.env.PR_NUMBER}.md`;

function reportError(message) {
  console.log(`::error::${message}`);

  fs.createReadStream('upcoming-release-notes/README.md')
    .pipe(fs.createWriteStream(process.env.GITHUB_STEP_SUMMARY))
    .on('close', () => {
      process.exit(1);
    });
}

(() => {
  if (!fs.existsSync(expectedPath)) {
    reportError(`Release note file ${expectedPath} not found`);
    return;
  }

  const { data, content } = matter(fs.readFileSync(expectedPath, 'utf-8'));

  if (!data.category) {
    reportError(`Release note is missing a category.`);
    return;
  }

  if (!data.authors) {
    reportError(`Release note is missing authors.`);
    return;
  }
  if (!Array.isArray(data.authors)) {
    reportError(`Release note authors should be a list.`);
    return;
  }

  if (content.trim().split('\n').length !== 1) {
    reportError(
      `Release note file ${expectedPath} body should contain exactly one line`,
    );
    return;
  }

  console.log('Everything looks good! \u{1f389}');
})();
