document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

function ajouterTache() {
    var taskField = document.getElementById("taskField");
    var taskListPending = document.getElementById("taskListPending");

    if (taskField.value) {
        var listItem = document.createElement("li");
        listItem.classList.add("task");
        listItem.innerHTML = taskField.value + '<span class="icon icon-complete"></span>';
        $(listItem).swipe({
            swipeRight: function() {
                moveToCompleted(this);
            }
        });
        listItem.querySelector(".icon-complete").addEventListener("click", function() {
            moveToCompleted(listItem);
        });
        taskListPending.appendChild(listItem);
        taskField.value = '';
    }
}

function moveToCompleted(listItem) {
    var taskListCompleted = document.getElementById("taskListCompleted");
    $(listItem).off('swipe');
    listItem.classList.add("swipe-right");
    setTimeout(function() {
        listItem.classList.remove("swipe-right");
        listItem.innerHTML = listItem.textContent + '<span class="icon icon-undo"></span>';
        taskListCompleted.appendChild(listItem);
        $(listItem).swipe({
            swipeLeft: function() {
                moveToPending(this);
            }
        });
        listItem.querySelector(".icon-undo").addEventListener("click", function() {
            moveToPending(listItem);
        });
    }, 300);
}

function moveToPending(listItem) {
    var taskListPending = document.getElementById("taskListPending");
    $(listItem).off('swipe');
    listItem.classList.add("swipe-left");
    setTimeout(function() {
        listItem.classList.remove("swipe-left");
        listItem.innerHTML = listItem.textContent + '<span class="icon icon-complete"></span>';
        taskListPending.appendChild(listItem);
        $(listItem).swipe({
            swipeRight: function() {
                moveToCompleted(this);
            }
        });
        listItem.querySelector(".icon-complete").addEventListener("click", function() {
            moveToCompleted(listItem);
        });
    }, 300);
}

function reinitialiserListe() {
    var taskListPending = document.getElementById("taskListPending");
    var taskListCompleted = document.getElementById("taskListCompleted");
    taskListPending.innerHTML = '';
    taskListCompleted.innerHTML = '';
}
