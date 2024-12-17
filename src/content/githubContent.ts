function addGithubButton(): void {
  // Locate the target div where we want to add the button
  const targetDiv = document.querySelector<HTMLElement>(
    ".gh-header-actions.mt-0.mb-3.mb-md-2.ml-1"
  );

  if (targetDiv) {
    // Create a new button
    const button = document.createElement("button");
    button.textContent = "Copy PR Info";
    button.className =
      "flex-md-order-2 Button--secondary Button--small Button m-0 mr-md-0";

    button.style.backgroundColor = "#2ea44f";
    button.style.color = "white";

    // Add click event to fetch and copy PR info
    button.addEventListener("click", () => {
      const url = window.location.href;

      // Extract commits from GitHub PR page
      const commitLinks = document.querySelectorAll<HTMLAnchorElement>(
        'a[href*="/commits/"]'
      );
      const uniqueLinks = Array.from(commitLinks).filter(
        (link) => link.text.length > 7
      );

      const subCommits = uniqueLinks.map((link) => link.text).join("\n -");

      let textToCopy = `[New Pull Request]`;
      textToCopy += `\n${
        document.querySelector<HTMLElement>(".js-issue-title.markdown-title")
          ?.innerHTML
      }`;
      textToCopy += `\n➡️ ${url}`;
      textToCopy += `\nCommits:`;
      textToCopy += `\n -${subCommits}`;

      // Copy text to clipboard
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => alert("✅ PR info copied to clipboard!"))
        .catch(() => alert("❌ Failed to copy PR info."));
    });

    // Append the button to the target div
    targetDiv.appendChild(button);
  }
}

// Run the function when the page loads
addGithubButton();
