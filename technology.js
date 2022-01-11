const technologyTabs = document.querySelectorAll(".small-button");

technologyTabs.forEach((tab) => {
  tab.addEventListener("click", selectTechnology);
});

function hideContent(parent, content) {
  parent
    .querySelectorAll(content)
    .forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}

function selectTechnology(e) {
  let targetTab;
  if (e.target.tagName === "SPAN") {
    targetTab = e.target.parentNode;
  } else {
    targetTab = e.target;
  }
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  hideContent(document, ".technology-info");
  showContent(document, [`#${targetPanel}`]);
  hideContent(document, "picture");
  showContent(document, [`#${targetImage}`]);
}
