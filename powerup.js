window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
        return [{
            text: "Collapse Lists by Default",
            callback: function (t) {
                collapseAllLists();
                console.write("Trello Slim List Power-Up loaded");
            }
        }];
    }
});

// Function to collapse all lists
function collapseAllLists() {
    setTimeout(() => {
        document.querySelectorAll('.list-header-extras-menu').forEach(menu => {
            let collapseButton = menu.querySelector('[aria-label="Collapse list"]');
            if (collapseButton) collapseButton.click();
        });
    }, 2000); // Delay to ensure Trello has loaded the lists
}

// Auto-collapse on board load
document.addEventListener("DOMContentLoaded", collapseAllLists);
