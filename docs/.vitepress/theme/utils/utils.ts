export function formatDate(date) {
  const formatDate = new Date(date);
  return formatDate.toLocaleString("zh", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
}

export function getQueryParam(paramName) {
  const reg = new RegExp("(^|&)" + paramName + "=([^&]*)(&|$)");
  let value = decodeURIComponent(window.location.search.substr(1)).match(reg);
  if (value != null) {
    return unescape(value[2]);
  }
  return null;
}

export function goToLink(url, paramName, paramValue) {
  if (paramName) {
    window.location.href = url + "?" + paramName + "=" + paramValue;
  } else {
    window.location.href = url;
  }
}
