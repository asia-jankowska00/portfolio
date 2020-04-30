const TypeWriter = function (txtElement, words) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.type();
};

// Type method
TypeWriter.prototype.type = function () {
  // Get full text of current word
  const fulltxt = this.words;
  //Add char
  this.txt = fulltxt.substring(0, this.txt.length + 1);
  // Insert txt into element
  this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

  if (this.txt.length !== this.words.length) {
    setTimeout(() => this.type(), 50);
  }
};

// Init app
function init() {
  const txtElement = document.querySelectorAll(".txt-type");

  txtElement.forEach((txtElement) => {
    let wait = txtElement.getAttribute("data-wait");
    setTimeout(function () {
      let words = JSON.parse(txtElement.getAttribute("data-words"));
      new TypeWriter(txtElement, words);
    }, wait);
  });
}

// Init on DOM load
document.addEventListener("DOMContentLoaded", init);
