document.querySelector("#category").addEventListener("click", (e) => {
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.id);
  //   window.location.href = "/" + e.target.id; // this is the way propogate one page to the another page

  if (e.target.tagName === "BUTTON") {
    // add condition because if we click the button then its go to the another page
    // if i not add this condition then if we click the category container then its also go the /category page
    window.location.href = "/" + e.target.id; // this is the way propogate one page to the another page
  }
});
