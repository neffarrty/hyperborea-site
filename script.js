const articlesList = document.querySelector('.articles ul');

const articles = [

];

articles.forEach(article => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.textContent = article; // Добавленная скобка
  li.appendChild(a);
  articlesList.appendChild(li);
});
