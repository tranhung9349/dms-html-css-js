const htmlTemplate = `
  <main class="main-layout">
      <section class="side-bar" id="side-bar">
        <!-- <span class="toggle-btn" id="toggle-btn"><i class='bx bx-menu' id="header-toggle"></i></span> -->
        <div class="flex-shrink-0 p-3 mt-5" style="width: 280px;">
        <div class="py-1 d-flex align-items-center">
          <i class='bx bx-file'></i>
          <span class="mx-4">DNS</span>
        </div>

        <div class="ml-lg-3 mb-1 group-menu-items">
        <div class="">
          Quản lý văn bản
        </div>
      </div>
         
        <div class="mb-1 group-menu-items">
        <div class="btn-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#systems-collapse" aria-expanded="false" role="button" aria-controls="systems-collapse">
          Hệ thống
        </div>
        <div class="collapse ml-2" id="systems-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="group-menu-item rounded">Khai báo tham số</a></li>
            <li><a href="#" class="group-menu-item rounded">Quản trị người dùng</a></li>
          </ul>
        </div>
      </div>
        

      </section>
      <section class="main-container">
        <span class="toggle-btn" id="toggle-action"><i class='bx bx-menu' id="header-toggle"></i></span>
        maincontainer
      </section>
    </main>`;

// The class extends `HTMLElement`, but actually it could extend any element, such as `HTMLImageElement`
class CustomLayout extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = htmlTemplate;
    // const shadowOpen = this.attachShadow({ mode: "open" });
    // shadowOpen.append(htmlTemplate.content.cloneNode(true))
  }

  // Whenever an attibute is changed, this function is called. A switch statement is a good way to handle the various attributes.
  // Note that this also gets called the first time the attribute is set, so we do not need any special initialisation code.
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }

  // We need to specify which attributes will be watched for changes. If an attribute is not included here, attributeChangedCallback will never be called for it
  static get observedAttributes() {
    return ["", "side-bar"];
  }
}

// Now that our class is defined, we can register it
customElements.define("dms-layout", CustomLayout);

document.addEventListener("DOMContentLoaded", function () {
  const showNavbar = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    // Validate that all variables exist
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        console.log(toggle);
        // show navbar
        nav.classList.toggle("expand");
        // change icon

        // add padding to body
      });
    }
  };

  showNavbar("toggle-action", "side-bar");

  /*===== LINK ACTIVE =====*/
  // const linkColor = document.querySelectorAll(".nav_link");

  // function colorLink() {
  //   if (linkColor) {
  //     linkColor.forEach((l) => l.classList.remove("active"));
  //     this.classList.add("active");
  //   }
  // }
  // linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});

