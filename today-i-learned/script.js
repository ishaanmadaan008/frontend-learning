console.log("Hello World");

const btn = document.querySelector(".btn-open");

const form = document.querySelector(".fact-form");

const factList = document.querySelector(".facts-list");

console.dir(btn);

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

factList.innerHTML = "";

getFacts();

async function getFacts() {
  // Load data from Supabase
  const res = await fetch(
    "https://xrpetqqltlrntblmxvpm.supabase.co/rest/v1/facts?select=*",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycGV0cXFsdGxybnRibG14dnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzEyMjksImV4cCI6MjAwNTcwNzIyOX0.oSrAjC3D2LckUdidCoF8qZGNFGtc6iOukXtSnQnXCTM",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhycGV0cXFsdGxybnRibG14dnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAxMzEyMjksImV4cCI6MjAwNTcwNzIyOX0.oSrAjC3D2LckUdidCoF8qZGNFGtc6iOukXtSnQnXCTM",
      },
    }
  );

  const data = await res.json();
  console.log(data);
  createFactsList(data);
}

function createFactsList(dataArray) {
  var httarr = dataArray.map(function (initialFact) {
    return `<li class="fact"
  <p>
  ${initialFact.text}
  <a
    class="source"
    href=${initialFact.source}
    target="_blank"
    >(Source)</a
  >
</p>
<span class="tag" style="background-color: ${
      CATEGORIES.find((c) => c.name === initialFact.category).color
    }"

>${initialFact.category}</span>
  
  </li>

  `;
  });

  const html = httarr.join("");

  factList.insertAdjacentHTML("afterbegin", html);
}
