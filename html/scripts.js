function send(type) {
  const SERVER_IP = `http://${WAS_IP}:3000/${type}/`;
  let name = document.querySelector("input[name='name']").value;
  sendGet(SERVER_IP, name);
}

function sendGet(url, name = '') {
  var http = new XMLHttpRequest();
  http.onreadystatechange = () => {
    if (http.readyState === XMLHttpRequest.DONE) {
      if (http.status === 200) {
        var result = http.response;
        alert(result);
      } else {
        alert('뭔가 문제가 있어요.\nHTTP Status Code: ' + http.status);
      }
    }
  }
  http.open("GET", url + "?name=" + name);
  http.setRequestHeader("Content-type", "multipart/form-data");
  http.send();
}
