var apiKey = require('./../.env').apiKey;

exports.getRepos = function(ghUser){

  $.get('https://api.github.com/users/' + ghUser + '?access_token=' + apiKey).then(function(response){
    $('#user').append('<h3>' + response.name + '</h3><p><a href="' + response.html_url + '" target="_blank">' + response.login + '</a></p><p>Location: ' + response.location + '</p><hr>');
    console.log(response);
  }).fail(function(error){
    $('#user').append(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + ghUser + '/repos' + '?access_token=' + apiKey).then(function(response){
    $('#results').append('<h3 class="title">Public Repositories:</h3>');
    response.forEach(function(repo){
      console.log(response);
      $('#results').append('<h4 class="repo">' + repo.name + '</h4><p>' + repo.description + ' <a href="' + repo.html_url + '">Link</a></p>');
    });
    $('#results').append('</ul>');
  }).fail(function(error){
    $('#results').append(error.responseJSON.message);
  });
};
