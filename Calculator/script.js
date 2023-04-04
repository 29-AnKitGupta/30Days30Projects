function screenValue(value) {
    document.getElementById('kelci').value += value;
  }

  function clearScreen() {
    document.getElementById('kelci').value = "";
  }
  function calulation() {
    var values = document.getElementById('kelci').value;
    var result = eval(values);
    document.getElementById('kelci').value = result;
  }
