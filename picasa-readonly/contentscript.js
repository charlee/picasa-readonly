(function() {


	var PR = {

		init: function() {
			var url = location.href;

			if (url.match(/https?:\/\/picasaweb.google.com\/\d+\/.*/)) {

				$(document).delegate("a.gphoto-context-current, a.goog-icon-list-icon-link", "click", this.clearPicasaLinks);
				this.clearPicasaLinks();
			}

		},

		clearPicasaLinks: function() {

			window.setTimeout(function() {
				$(".lhcl_toolbar>div").each(function(idx, elem) {
					if (idx > 0) { $(elem).hide(); }
				});
				$("#lhid_caption .goog-inline-block").hide();    // caption change link
				$("#lhid_lic_editButton").hide();    // copyright change link
				$("#lhid_albumprop a.lhcl_linkHover").hide();    // album prop change links
				$(".lhcl_sidebox .goog-button").hide();			// share button
				$("#lhid_acl_notification_checkbox").closest("div").hide(); // notification checkbox
			}, 100);
		},

	};


	PR.init();

})();


// show icon
chrome.extension.sendRequest({}, function(response) {});
