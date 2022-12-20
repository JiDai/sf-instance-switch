//(function (w, instance) {

function snippet(url, instance) {
  var adminRegEx = /^https?:\/\/(admin\.)?[^/]+(:1240)?\/(.*)/;
  var externalRegEx = /^https?:\/\/(app\.)?[^/]+(:1239)?\/(.*)/;

  var adminRegMatches = url.match(adminRegEx);
  var externalRegMatches = url.match(externalRegEx);

  if (adminRegMatches[1] || adminRegMatches[2]) {
    if (instance === "localhost") {
      return url.replace(adminRegEx, "http://localhost:1240/$3");
    }

    if (instance === "staging") {
      return url.replace(
        adminRegEx,
        "http://admin.app.staging.spacefill.fr/$3"
      );
    }

    console.log("No matching instance");
    return null;
  }

  if (externalRegMatches[1] || externalRegMatches[2]) {
    if (instance === "localhost") {
      return url.replace(externalRegEx, "http://localhost:1239/$3");
    }

    if (instance === "staging") {
      return url.replace(externalRegEx, "http://app.staging.spacefill.fr/$3");
    }

    console.log("No matching instance");
    return null;
  }

  console.log("No matching url");
  return null;
}

function go(w, instance) {
  var url = snippet(w.location.href, instance);
  w.open(url, "to_" + instance + "_" + new Date().getTime());
}

// go(w, instance)} (window, 'localhost'))

export default snippet;
