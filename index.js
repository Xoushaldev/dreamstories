const addRecordForm = document.querySelector('#addRecordForm');
const recordTitle = document.querySelector('.titleInput');
const datePicker = document.querySelector('.datePicker');
const recordContent = document.querySelector('.contentArea');

// Get diary from local storage
function getDiaryFromLocalStorage() {
	if (localStorage.getItem('diary') == null) {
		return [];
	} else {
		return JSON.parse(localStorage.getItem('diary'));
	}
}

// Handle form submit event
function handleSubmit(event) {
	// Prevent unwanted page refresh
	event.preventDefault();

	// Validate user input values
	if (
		recordTitle.value == '' ||
		datePicker.value == '' ||
		recordContent.value == ''
	) {
		// Show an alert box
		alert('Inserisci tutte le informazioni more');
	} else {
		// Call "get diary from local storage" function
		const diary = getDiaryFromLocalStorage();

		// Insert element at the end of the diary array
		diary.push({
			id: `date${Date.now()}`,
			title: recordTitle.value,
			createdAt: datePicker.value,
			content: recordContent.value,
		});

		// Re-save diary array to local storage
		localStorage.setItem('diary', JSON.stringify(diary));

		// Clear user input values
		recordTitle.value = '';
		datePicker.value = '';
		recordContent.value = '';

		// Show an alert box
		alert('Aggiunta correttamente <3');
	}
}

// Add submit event listener to add record form
addRecordForm.addEventListener('submit', handleSubmit);
