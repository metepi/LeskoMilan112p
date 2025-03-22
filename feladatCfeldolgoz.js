const cname = document.getElementById("name");
const comment = document.getElementById("comment");
const btn = document.getElementById("btn");
const cmts = document.getElementById("cmts");

let comments = [
  {
    cname: "Köményi Péter",
    comment: "Szuper ez az oldal!!",
  },
];

function escapeHtml(unsafe) {
  return (
    unsafe
      //.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
  );
}

const initializeComments = () => {
  let storageComments = [...comments];
  if (window.localStorage.getItem("comments")) {
    storageComments = JSON.parse(atob(window.localStorage.getItem("comments")));
  } else {
    window.localStorage.setItem("comments", btoa(JSON.stringify(comments)));
  }
  comments = [...storageComments];
};

const refreshComments = () => {
  cname.value = "";
  comment.value = "";
  cmts.innerHTML = "";
  comments.forEach((cmt) => {
    let template = `
        <article>
            <h3>${escapeHtml(cmt.cname)}</h3>
            <p>${escapeHtml(cmt.comment)}</p>
         </article>
        `;
    cmts.innerHTML += template;
  });
};

const deleteComments = () => {
  window.localStorage.setItem("comments", "");
  comments = [];
  refreshComments();
};

btn.addEventListener("click", () => {
  if (cname.value && comment.value) {
    comments.push({
      cname: escapeHtml(cname.value),
      comment: escapeHtml(comment.value),
    });
    window.localStorage.setItem("comments", btoa(JSON.stringify(comments)));
  }
  refreshComments();
});

initializeComments();
refreshComments();
