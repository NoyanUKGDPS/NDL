document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = "80px";
  container.style.left = "20px";
  container.style.width = "250px";
  container.style.zIndex = "9999";
  container.style.backgroundColor = "#fff";  // white background
  container.style.padding = "8px";
  container.style.borderRadius = "8px";
  container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
  
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search by level name...";
  input.style.width = "100%";
  input.style.padding = "10px";
  input.style.borderRadius = "8px";
  input.style.border = "1px solid #ccc";
  input.style.fontSize = "14px";

  container.appendChild(input);
  document.body.appendChild(container);
});
