document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("commentInput");
  const button = document.getElementById("submitBtn");
  const list = document.getElementById("commentList");

  // Prevent Enter key from refreshing page or doing nothing
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      button.click(); // act as if "Post" was clicked
    }
  });

  button.addEventListener("click", () => {
    const text = input.value.trim();

    if (text !== "") {
      const comment = document.createElement("div");
      comment.classList.add("comment");
      comment.textContent = text;

      list.prepend(comment); // show newest on top
      input.value = ""; // clear input
    } else {
      alert("Please enter a comment before posting!");
    }
  });
});
