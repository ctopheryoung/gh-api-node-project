var getRepos = require('./../js/github-request.js').getRepos;

$(document).ready(function() {
  $('#gh-form-submit').click(function() {
    $('#user').empty();
    $('#results').empty();
    var ghUser = $('#gh-user').val();
    getRepos(ghUser);
  });
});
