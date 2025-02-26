document.addEventListener("DOMContentLoaded", function () {
    fetch("https://repo-tech2edge.github.io/tasks/sample.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("data-container");
            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "col-md-4";
                card.innerHTML = `
                    <div class="card mb-4">
                        <img src="${item.image}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
document.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" && e.target.closest(".card")) {
        document.getElementById("modalImage").src = e.target.src;
        new bootstrap.Modal(document.getElementById("imageModal")).show();
    }
});
