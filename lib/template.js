module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <a href="/author">Author</a>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list:function(topics){
    var list = '<ul>';
    var i = 0;
    while(i < topics.length){
      list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  },
  authorSelect:function(authors, author_id) {
    var select = `<select name="author">
          <option value="">--Please choose an author--</option>`;
    var i = 0;
    while(i<authors.length) {
      var selected = '';
      if(authors[i].id === author_id) {
        selected = ' selected';
      }
      select += `<option value="${authors[i].id}"${selected}>
      ${authors[i].name}
      </option>`;
      i++;
    }
    select += `</select>`;
    return select;
  },
  authorTable:function(authors) {
    var table = '<table>';
      var i = 0;
      while(i < authors.length) {
        table += `
        <tr>
          <td>${authors[i].name}</td>
          <td>${authors[i].profile}</td>
          <td><a href="/">update</a></td>
          <td><a href="/">update</a></td>
        </tr>
        `
        i++;
      }
      table += '</table>';
      return table;
  }
}
