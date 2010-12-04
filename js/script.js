/// <reference path="libs/jquery-1.4.2.js" />

/* Author: 
bpo@robotparade.co.uk
*/
if (window.jQuery && window.jQuery.ui) {
    (function ($) {


        $("nav").tabs();
        $("nav.ui-tabs.ui-corner-all").removeClass("ui-corner-all").addClass("ui-corner-top");

        $.getJSON("http://github.com/api/v2/json/repos/show/oharab?callback=?", function (json) {
            if (json.repositories.length == 0) {
                $("#projects").append("<p>oharab has not created any projects yet.</p>");
            } else {
                var list = $("<ul />");
                for (var i = 0; i < json.repositories.length; i++) {
                    var repo = json.repositories[i];
                    list.append($("<li />").append($("<a />").attr("href", repo.url).text(repo.name)));
                }

                $("#projects").append(
                    list
                );
            }
        });
        $.getJSON("http://gist.github.com/api/v1/json/gists/oharab?callback=?", function (json) {
            if (json.gists.length == 0) {
                $("#snippets").append("<p>oharab has not created any snippets yet.</p>");
            } else {

            }
        });

    })(this.jQuery);
}