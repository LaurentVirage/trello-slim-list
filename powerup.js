window.TrelloPowerUp.initialize({
    'board-buttons': function (t, opts) {
      return [{
        text: "Slim Lists",
        callback: function (t) {
          return t.get('board', 'private', 'slimListId')
            .then(listId => {
              if (!listId) {
                alert("No list set to be slim yet!");
                return;
              }
  
              let style = document.createElement("style");
              style.innerHTML = `
                [data-list-id="${listId}"] {
                  width: 10px !important;
                  min-width: 10px !important;
                  overflow: hidden !important;
                  transition: width 0.3s ease-in-out;
                }
              `;
              document.head.appendChild(style);
            });
        }
      }];
    }
  });