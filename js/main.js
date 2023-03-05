// Загружаем задачи, сохраненные в localStorage
if(localStorage['tasks']) {
	$("#tasks").append(localStorage['tasks']);
} 

// Переключение состояния задачи по клику (выпонена/не выполнена)
$('#tasks').on('click', 'li.task', function(event) {
	$(this).toggleClass('complete');
  localStorage['tasks'] = $('#tasks').html(); // обновляем задачи в хранилище
});

// Функционал кнопки удаления задачи
$('#tasks').on('click', '.delete-task', function(event) {
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
		localStorage['tasks'] = $('#tasks').html(); // обновляем задачи в хранилище
	});
	event.stopPropagation(); // отключаем наследование ивентов
});

// Функционал скрытия/показа поля добавления задачи
$('#task-toggler').click(function(event) {
	$('#add-task').fadeToggle('300');
});

// Добавление задачи нажатием на Enter
$('input[type="text"]').keypress(function(event) {
	if(event.which === 13) {
		var todoTitle = $(this).val(); // Получаем название задачи
		$(this).val(""); // Очищаем ввод
		$("#tasks").append('<li class="task"><span class="delete-task"><i class="fas fa-trash-alt"></i></span> ' + todoTitle + '</li>'); // добавляем задачу в список
		localStorage['tasks'] = $('#tasks').html(); // добавляем задачи в хранилище
	}
});