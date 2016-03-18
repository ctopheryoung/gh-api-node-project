var apiKey = require('./../.env').apiKey;

exports.getRepos = function(ghUser){

  $.get('https://api.github.com/users/' + ghUser + '?access_token=' + apiKey).then(function(response){
    $('#user').append('<h3>' + response.name + '</h3><p><a href="' + response.html_url + '" target="_blank">' + response.login + '</a></p><p>Location: ' + response.location + '</p>');
    console.log(response);
  }).fail(function(error){
    $('#user').append(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + ghUser + '/repos' + '?access_token=' + apiKey).then(function(response){
    $('#results').append('<h3>Public Repositories</h3><ul>');
    response.forEach(function(repo){
      $('#results').append('<li>' + repo.name + '</li>');
    });
    $('#results').append('</ul>');
  }).fail(function(error){
    $('#results').append(error.responseJSON.message);
  });
};
