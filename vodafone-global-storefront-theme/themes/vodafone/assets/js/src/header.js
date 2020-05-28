(function () {
  var navigationTop = null;

  function changeLanguage(language) {
    var separatedLocation = window.location.pathname.split("/");
    var location = "";

    for (
      var separatedLocationIndex = 2;
      separatedLocationIndex < separatedLocation.length;
      separatedLocationIndex++
    ) {
      location = location + "/" + separatedLocation[separatedLocationIndex];
    }

    window.location = "/" + language + location + window.location.search;
  }

  function toggleLanguageChooser() {
    var $ = $ || jQuery;
    var optionList = $(".js-language-options");
    var downIcon = $(".language__icon--down");
    var upIcon = $(".language__icon--up");

    if (optionList.hasClass("open")) {
      optionList.removeClass("open");
      downIcon.addClass("open");
      upIcon.removeClass("open");
    } else {
      optionList.addClass("open");
      downIcon.removeClass("open");
      upIcon.addClass("open");
    }
  }

  function toggleProfileMenu() {
    var $ = $ || jQuery;
    var optionList = $(".js-profile-options");
    var downIcon = $(".profile__icon--down");
    var upIcon = $(".profile__icon--up");

    if (optionList.hasClass("open")) {
      optionList.removeClass("open");
      downIcon.addClass("open");
      upIcon.removeClass("open");
    } else {
      optionList.addClass("open");
      downIcon.removeClass("open");
      upIcon.addClass("open");
    }
  }

  function navToggle() {
    var $ = $ || jQuery;
    var navItem = $(".js-navigation-item.navigation__item--clickable");
    var link = $(".js-navigation-link");
    var dropdownContent = $(".js-navigation.navigation--tertiary");

    var navItemActiveClass = "navigation__item--active";
    var linkActiveClass = "navigation__link--active";
    var dropdownContentActiveClass = "navigation--display";

    if (navItem.hasClass(navItemActiveClass)) {
      navItem.removeClass(navItemActiveClass);
      link.removeClass(linkActiveClass);
      dropdownContent.removeClass(dropdownContentActiveClass);
    } else {
      navItem.addClass(navItemActiveClass);
      link.addClass(linkActiveClass);
      dropdownContent.addClass(dropdownContentActiveClass);
    }
  }

  function accordionToggle() {
    var $ = $ || jQuery;
    var head = $(".js-accordion-heading.navigation__accordion--heading");
    var content = $(".js-accordion-content.navigation__accordion-content");

    var headActiveClass =
      "js-accordion-heading-active accordion__heading--active";

    if (head.hasClass(headActiveClass)) {
      head.removeClass(headActiveClass);
      content.removeClass("open");
    } else {
      head.addClass(headActiveClass);
      content.addClass("open");
    }
  }

  function toggleSearchFieldVisibility() {
    var container = $("#header-search-container.search-container");
    var input = $("#header-search-container .search-input");

    if (container.hasClass("open")) {
      container.removeClass("open");
      input.val(input.attr("data-default-value"));
    } else {
      container.addClass("open");
      container.find(".search-input").focus();
    }
  }

  function submitSearch() {
    var container = $("#header-search-container.search-container");
    var input = $("#header-search-container .search-input");

    var baseUrl = container.attr("data-base-url");
    var value = input.val();

    if (value) {
      window.location.href = baseUrl + "?q=" + value;
    }
  }

  function onSearchIconClick() {
    var container = $("#header-search-container.search-container");

    if (container.hasClass("open")) {
      submitSearch();
    } else {
      toggleSearchFieldVisibility();
    }
  }

  function getSearchQuery() {
    return getQueryVariable("q");
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (decodeURIComponent(pair[0]) === variable) {
        return decodeURIComponent(pair[1]);
      }
    }
  }

  function handleScroll() {
    var $ = $ || jQuery;

    var navigation = $(".js-navigation.navigation--primary");
    var navigationStatic = $(".js-navigation-static");

    if (!navigation.length) {
      return;
    }

    var scrollTop = $(window).scrollTop();
    navigationTop =
      navigationTop === null ? navigation.offset().top || 0 : navigationTop;

    if (
      scrollTop <= navigationTop &&
      navigation.hasClass("navigation--fixed")
    ) {
      navigationStatic.css({height: 0});
      navigation.removeClass("navigation--fixed");
    } else if (
      scrollTop > navigationTop &&
      !navigation.hasClass("navigation--fixed")
    ) {
      navigationStatic.css({height: navigation.outerHeight()});
      navigation.addClass("navigation--fixed");
    }
  }

  $(document).ready(function () {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  $(window).on("load", function () {
    var container = $("#header-search-container.search-container");
    var input = $("#header-search-container .search-input");
    var searchQuery = getSearchQuery();

    if (searchQuery) {
      container.addClass("open");
      input.attr("value", searchQuery);
      input.attr("data-default-value", searchQuery);
    }
  });

  window.VodafoneHeader = {
    changeLanguage: changeLanguage,
    toggleLanguageChooser: toggleLanguageChooser,
    toggleProfileMenu: toggleProfileMenu,
    navToggle: navToggle,
    toggleSearchFieldVisibility: toggleSearchFieldVisibility,
    submitSearch: submitSearch,
    onSearchIconClick: onSearchIconClick,
    accordionToggle: accordionToggle,
    getSearchQuery: getSearchQuery
  };
})();
