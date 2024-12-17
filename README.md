# Chrome Extension: Request Code Review

This Chrome extension allows you to quickly copy GitHub Pull Request (PR) links and commit details for code reviews. It automatically extracts key PR information from GitHub and formats it for easy sharing, whether in Slack, email, or other communication channels.

## Features

- **Instant PR Link and Commit Copy**: Quickly copy the PR title, URL, commit messages, and subcommits to your clipboard with a button click.
- **GitHub Integration**: Works directly on GitHub PR pages to extract relevant commit and subcommit data.
- **Formatted Output**: Outputs PR details in a structured and readable format, including commits and subcommits.

## Installation

1. Clone or download the repository.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked**.
5. Select the directory where you saved the extension.

## Usage

1. Navigate to a GitHub pull request page (e.g., `https://github.com/user/repository/pull/123`).
2. Click the extension icon in the browser toolbar to trigger the action.
3. A button will appear on the page. Click the button to copy the PR details to your clipboard.
4. Once copied, you can paste the PR details wherever you need it.

### What gets copied?
- **PR Title**: The title of the pull request.
- **PR URL**: A link to the pull request.
- **Commits**: Commit messages associated with the PR.

## Example Output

The copied content will look like this:

```
[New Pull Request] 
- feat: add data attribute to image banner 
➡️ https://github.com/project/subProject/pull/11

Commits:

- feat: add data attribute to image banner
- feat: add dynamic locale support in money macro
```