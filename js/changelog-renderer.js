/**
 * Changelog Renderer
 * Renders changelog entries with on-demand pagination.
 * Page 1 is inlined via changelog-page-1.js; other pages are fetched
 * as changelog-page-{n}.js when the user navigates to them.
 * Requires changelog-meta.js (window.CHANGELOG_META + labels).
 */
(function() {
  var currentPage = 1;
  var pendingScripts = {};

  function renderChangelog() {
    var meta = window.CHANGELOG_META;
    if (!meta || !meta.totalPages) return;
    var pager = document.getElementById('changelogPager');
    if (pager) bindPager(pager);
    renderPage(1);
  }

  function renderPage(page) {
    var meta = window.CHANGELOG_META;
    var container = document.getElementById('changelogContent');
    var pager = document.getElementById('changelogPager');
    if (!container || !meta) return;

    var totalPages = meta.totalPages;
    currentPage = Math.min(Math.max(page, 1), totalPages);

    var pages = window.CHANGELOG_PAGES || {};
    var entries = pages[currentPage];

    if (entries) {
      var html = '';
      entries.forEach(function(entry) {
        html += renderEntry(entry);
      });
      container.innerHTML = html;
    } else {
      showLoading(container);
      loadPage(currentPage);
    }

    if (pager) {
      pager.innerHTML = totalPages > 1 ? renderPager(totalPages) : '';
    }
  }

  function loadPage(page) {
    if (pendingScripts[page]) return;
    pendingScripts[page] = true;
    var script = document.createElement('script');
    script.src = 'changelog-page-' + page + '.js';
    script.onload = function() {
      delete pendingScripts[page];
      if (currentPage === page) renderPage(page);
    };
    script.onerror = function() {
      delete pendingScripts[page];
      if (currentPage === page) showError(page);
    };
    document.head.appendChild(script);
  }

  function showLoading(container) {
    var labels = window.CHANGELOG_LABELS || {};
    container.innerHTML = '<div class="changelog-loading">' + escapeHtml(labels.loading || 'Loading…') + '</div>';
  }

  function showError(page) {
    var container = document.getElementById('changelogContent');
    var labels = window.CHANGELOG_LABELS || {};
    if (!container) return;
    container.innerHTML = '<div class="changelog-loading changelog-error">' +
      escapeHtml(labels.loadError || 'Failed to load. Click to retry.') + '</div>';
    container.firstChild.onclick = function() {
      renderPage(page);
    };
  }

  function renderEntry(entry) {
    var typeLabels = window.TYPE_LABELS || {};
    var html = '<div class="version-entry">';

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
    return html;
  }

  function renderPager(totalPages) {
    var labels = window.CHANGELOG_LABELS || {};
    var prevLabel = labels.prevPage || '‹';
    var nextLabel = labels.nextPage || '›';

    var html = '';
    html += '<button type="button" class="pager-btn pager-prev" data-page="' + (currentPage - 1) + '"' +
      (currentPage === 1 ? ' disabled' : '') + '>' + prevLabel + '</button>';

    getPageNumbers(currentPage, totalPages).forEach(function(p) {
      if (p === '...') {
        html += '<span class="pager-ellipsis">…</span>';
      } else {
        html += '<button type="button" class="pager-btn pager-num' + (p === currentPage ? ' active' : '') +
          '" data-page="' + p + '">' + p + '</button>';
      }
    });

    html += '<button type="button" class="pager-btn pager-next" data-page="' + (currentPage + 1) + '"' +
      (currentPage === totalPages ? ' disabled' : '') + '>' + nextLabel + '</button>';
    return html;
  }

  // Compact page list: first, last, current±1, with ellipses
  function getPageNumbers(current, total) {
    if (total <= 7) {
      var all = [];
      for (var i = 1; i <= total; i++) all.push(i);
      return all;
    }
    var pages = [1];
    var from = Math.max(2, current - 1);
    var to = Math.min(total - 1, current + 1);
    if (from > 2) pages.push('...');
    for (var p = from; p <= to; p++) pages.push(p);
    if (to < total - 1) pages.push('...');
    pages.push(total);
    return pages;
  }

  function bindPager(pager) {
    pager.onclick = function(e) {
      var btn = e.target.closest('.pager-btn');
      if (!btn || btn.disabled) return;
      var page = parseInt(btn.getAttribute('data-page'), 10);
      if (!isNaN(page)) {
        renderPage(page);
        var card = document.getElementById('changelogContent');
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
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
