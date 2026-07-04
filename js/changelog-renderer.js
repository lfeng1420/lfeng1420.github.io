/**
 * Changelog Renderer
 * Dynamically renders changelog entries from window.CHANGELOG_DATA
 */
(function() {
  function renderChangelog() {
    var data = window.CHANGELOG_DATA;
    var labels = window.CHANGELOG_LABELS || {};
    var typeLabels = window.TYPE_LABELS || {};
    var container = document.getElementById('changelogContent');
    if (!container || !data || !data.length) return;

    var html = '';

    data.forEach(function(entry) {
      html += '<div class="version-entry">';

      // Version header
      html += '<div class="version-header">';
      html += '<div class="version-badge">';
      html += '<span class="version-number">' + escapeHtml(entry.version) + '</span>';
      html += '<span class="version-date">' + escapeHtml(entry.date) + '</span>';
      if (entry.tag) {
        html += '<span class="version-tag ' + escapeHtml(entry.tagClass || '') + '">' + escapeHtml(entry.tag) + '</span>';
      }
      html += '</div></div>';

      // Categories
      if (entry.categories && entry.categories.length) {
        entry.categories.forEach(function(cat) {
          // "plain" type: render raw HTML directly
          if (cat.type === 'plain') {
            html += '<div class="update-category">';
            if (cat.html) {
              html += cat.html;
            }
            html += '</div>';
            return;
          }

          html += '<div class="update-category">';
          var catTitle = typeLabels[cat.type];
          if (catTitle) {
            html += '<div class="category-title">' + catTitle + '</div>';
          }
          if (cat.items && cat.items.length) {
            html += '<ul class="update-list">';
            cat.items.forEach(function(item) {
              html += '<li>' + item + '</li>';
            });
            html += '</ul>';
          }
          html += '</div>';
        });
      }

      html += '</div>';
    });

    container.innerHTML = html;
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }

  // Render when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderChangelog);
  } else {
    renderChangelog();
  }
})();
