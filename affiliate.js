/* StainlessSteelHinges.com — Amazon affiliate tag injector */
window.AMAZON_TAG = "stainlesshing-20";
document.addEventListener("DOMContentLoaded", function () {
  var tag = (window.AMAZON_TAG || "").trim();
  if (!tag) return;
  var links = document.querySelectorAll('a[href*="amazon.com"]');
  for (var i = 0; i < links.length; i++) {
    try {
      var u = new URL(links[i].href);
      if (!u.searchParams.get("tag")) { u.searchParams.set("tag", tag); links[i].href = u.toString(); }
    } catch (e) {}
  }
});
