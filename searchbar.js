document.addEventListener("DOMContentLoaded", function () {
    // Create search container
    const searchContainer = document.createElement("div");
    searchContainer.style.position = "absolute";
    searchContainer.style.top = "80px";   // adjust if needed
    searchContainer.style.left = "20px";  // aligns like the image
    searchContainer.style.width = "250px";

    // Create input
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search by level name...";
    
    // Styling to match the screenshot
    searchInput.style.width = "100%";
    searchInput.style.padding = "10px";
    searchInput.style.borderRadius = "8px";
    searchInput.style.border = "1px solid #ccc";
    searchInput.style.fontSize = "14px";
    searchInput.style.outline = "none";

    // Append input to container
    searchContainer.appendChild(searchInput);

    // Append to page
    document.body.appendChild(searchContainer);

    // Optional: basic filtering logic
    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const items = document.querySelectorAll("li, .list-item");

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });
});
