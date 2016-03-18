var apiKey = require('./../.env').apiKey;

exports.getRepos = function(ghUser){
  $.get('https://api.github.com/users/' + ghUser + '/repos' + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    response.forEach(function(repo){
      $('#results').append("<p>" + repo.name + "</p>");
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
