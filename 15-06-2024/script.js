const addBox = document.querySelector(".add-box"),
      popupBox = document.querySelector(".popup-box"),
      popupTitle = popupBox.querySelector("header p"),
      closeIcon = popupBox.querySelector("header i"),
      titleTag = popupBox.querySelector("input"),
      descTag = popupBox.querySelector("textarea"),
      addBtn = popupBox.querySelector("button");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let notes = JSON.parse(localStorage.getItem("notes") || "[]"),
    isUpdate = false,
    updateId;

// Show the popup box to add a new note
addBox.addEventListener("click", () => {
    popupTitle.innerText = "Add a new Note";
    addBtn.innerText = "Add Note";
    popupBox.classList.add("show");
    document.body.style.overflow = "hidden";
    titleTag.focus();
});

// Close the popup box
closeIcon.addEventListener("click", () => {
    isUpdate = false;
    titleTag.value = "";
    descTag.value = "";
    popupBox.classList.remove("show");
    document.body.style.overflow = "auto";
});

// Display notes on the page
function showNotes() {
    document.querySelectorAll(".note").forEach(note => note.remove());
    notes.forEach((note, id) => {
        const noteHTML = `
            <li class="note">
                <div class="details">
                    <p>${note.title}</p>
                    <span>${note.description.replace(/\n/g, '<br>')}</span>
                </div>
                <div class="bottom-content">
                    <span>${note.date}</span>
                    <div class="settings">
                        <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                        <ul class="menu">
                            <li onclick="updateNote(${id}, '${note.title}', \`${note.description.replace(/'/g, "\\'")}\`)"><i class="uil uil-pen"></i>Edit</li>
                            <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                        </ul>
                    </div>
                </div>
            </li>`;
        addBox.insertAdjacentHTML("afterend", noteHTML);
    });
}

// Show the menu for a note
function showMenu(elem) {
    elem.parentElement.classList.toggle("show");
    document.addEventListener("click", event => {
        if (event.target !== elem) {
            elem.parentElement.classList.remove("show");
        }
    }, { once: true });
}

// Delete a note
function deleteNote(noteId) {
    if (confirm("Are you sure you want to delete this note?")) {
        notes.splice(noteId, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
    }
}

// Update a note
function updateNote(noteId, title, description) {
    updateId = noteId;
    isUpdate = true;
    addBox.click();
    titleTag.value = title;
    descTag.value = description;
    popupTitle.innerText = "Update a Note";
    addBtn.innerText = "Update Note";
}

// Add or update a note when the button is clicked
addBtn.addEventListener("click", e => {
    e.preventDefault();
    const title = titleTag.value.trim(),
          description = descTag.value.trim();

    if (title || description) {
        const currentDate = new Date(),
              noteInfo = {
                  title,
                  description,
                  date: `${months[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
              };

        if (isUpdate) {
            notes[updateId] = noteInfo;
            isUpdate = false;
        } else {
            notes.push(noteInfo);
        }

        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
        closeIcon.click();
    }
});

showNotes();
