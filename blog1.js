function toggleDetails(postId) {
    var detailsDiv = document.getElementById("details-" + postId);

    if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
        detailsDiv.style.display = "block";
    } else {
        detailsDiv.style.display = "none";
    }
    }