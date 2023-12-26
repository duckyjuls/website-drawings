document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("duck").addEventListener("click", function () {
    redirectToWebsite('https://duckyjuls.github.io/website-letter1/');
  });

  document.getElementById("heart").addEventListener("click", function () {
    redirectToWebsite('https://duckyjuls.github.io/website-letter2/');
  });

  document.getElementById("bear").addEventListener("click", function () {
    redirectToWebsite('https://duckyjuls.github.io/website-letter3/');
  });

  let count = 0;

  document.getElementById("duck").addEventListener("click", function () {
    if (count === 0) {
      count++;
    }
    if (count === 3) {
      document.getElementById("loveText").style.display = "block";
    }
  });

  document.getElementById("heart").addEventListener("click", function () {
    if (count === 1) {
      count++;
    }
    if (count === 3) {
      document.getElementById("loveText").style.display = "block";
    }
  });

  document.getElementById("bear").addEventListener("click", function () {
    if (count === 2) {
      count++;
    }
    if (count === 3) {
      document.getElementById("loveText").style.display = "block";
    }
  });
});

function redirectToWebsite(url) {
  try {
    window.open(url, "_blank");
  } catch (error) {
    console.error("Error opening window:", error);
  }
}
