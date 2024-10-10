const hasDomain = (url) => {
  return url.includes("//");
};

const hasSubdomain = (url) => {
  return url.includes("www");
};

const deleteDomain = (url) => {
  let current = url;
  if (hasDomain(url)) {
    current = current.replace(/^.*?\/\//, "");
  }

  if (hasSubdomain(url)) {
    current = current.replace("www.", "");
  }

  return current;
};

function domainName(url) {
  let withoutDomain = deleteDomain(url);
  return withoutDomain.split(".")[0];
}
