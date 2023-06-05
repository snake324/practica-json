fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.results.forEach(todo => {
      console.log(todo.title);
    });
  })
 