const blockquote = document.querySelector("blockquote");
const firstQuoteElement = document.querySelector("blockquote").firstElementChild;
const quotesList = Array.from(document.querySelectorAll("q"));

function addClassNameActiveToElement(element) {
  element.classList.add("active");
}

function removeActiveQuote() {
  // Get active quote
  const activeQuote = document.querySelector("q.active");
  const activeBullet = document.querySelector("blockquote > ul > li.active");

  // Remove active from current active quote
  activeQuote.classList.remove("active");

  // Remove active from current active bullet in navigation
  activeBullet.classList.remove("active");
}

function handleNavigationClick(element) {
  const navigationList = Array.from(
    document.querySelectorAll("blockquote > ul > li")
  );

  removeActiveQuote();

  const activeIndex = navigationList.indexOf(element);

  addClassNameActiveToElement(quotesList[activeIndex]);
  addClassNameActiveToElement(navigationList[activeIndex]);
}

// Set first quote as active (prevents setting class in html)
addClassNameActiveToElement(firstQuoteElement);

// Let's create navigation based on amount of quotes
const navigationList = document.createElement("Ul");
blockquote.appendChild(navigationList);

const sliderNavigation = document.querySelector("blockquote > ul");

for (i = 0; i < quotesList.length; i++) {
  const element = document.createElement("li");

  element.addEventListener("click", function(e) {
    handleNavigationClick(e.target);
  });
  sliderNavigation.appendChild(element);
}

// Set first navigation item as active
addClassNameActiveToElement(sliderNavigation.firstElementChild);

const interval = setInterval(function() {
  const activeQuote = document.querySelector("q.active");
  removeActiveQuote();

  // See if active quote's sibling is another quote
  if (activeQuote.nextElementSibling.tagName === "Q") {
    const nextActive = activeQuote.nextElementSibling;
    // Add active class to next active quote
    nextActive.classList.add("active");

    // To know the index of the active slide we create an array from quotes in the html
    const navigationList = Array.from(
      document.querySelectorAll("blockquote > ul > li")
    );

    // Add active class to slidernavigation
    return addClassNameActiveToElement(
      navigationList[quotesList.indexOf(nextActive)]
    );
  }

  // It will only get here when next element is not an quote (last quote is active for example)
  addClassNameActiveToElement(firstQuoteElement);
  addClassNameActiveToElement(sliderNavigation.firstElementChild);
}, 5000);
