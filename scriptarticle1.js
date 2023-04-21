
// получаем все заголовки раскрывающихся блоков
const accordionTitles = document.querySelectorAll('.accordion-title');

// добавляем обработчики клика на каждый заголовок
accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    // получаем родительский элемент заголовка - блок accordion
    const accordion = title.parentNode;
    // получаем содержимое блока с помощью класса .accordion-content
    const content = accordion.querySelector('.accordion-content');
    // если блок закрыт, то открываем его
    if (content.style.maxHeight === '0px') {
      content.style.maxHeight = content.scrollHeight + 'px';
      // добавляем класс, чтобы изменить стиль заголовка при открытии блока
      title.classList.add('active');
    } else {
      // если блок уже открыт, то закрываем его
      content.style.maxHeight = '0px';
      // удаляем класс active, чтобы изменить стиль заголовка при закрытии блока
      title.classList.remove('active');
    }
  });
});
