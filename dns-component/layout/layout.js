const htmlTemplate = `
  <main class="main-layout">
      <section class="side-bar" id="side-bar">
        <!-- <span class="toggle-btn" id="toggle-btn"><i class='bx bx-menu' id="header-toggle"></i></span> -->
        <div class="group-menu flex-shrink-0 p-3 mt-5" style="width: 300px;">
        <div class="d-flex align-items-center ms-0 active">
          <i class='bx bx-file'></i>
          <span class="mx-3">DNS</span>
        </div>

        <div class="my-3 group-menu-items">
          <div class="menu-item-active">
            <a href="#" class="group-menu-item">Quản lý văn bản </a>
          </div>
        </div>
         
        <div class="my-3 group-menu-items">
        <div class="btn-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#systems-collapse" aria-expanded="false" role="button" aria-controls="systems-collapse">
          Hệ thống
        </div>
        <div class="collapse ml-2" id="systems-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal small mb-0">
            <li class="my-3 menu-item-active"><a href="#" class="group-menu-item rounded">Khai báo tham số</a></li>
            <li class="my-3"><a href="#" class="group-menu-item rounded">Quản trị người dùng</a></li>
          </ul>
        </div>
      </div>

      <div class="my-3 group-menu-items">
      <div class="btn-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#dictionary-collapse" aria-expanded="false" role="button" aria-controls="dictionary-collapse">
        Từ điển
      </div>
      <div class="collapse ml-2" id="dictionary-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal small mb-0">
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Nhóm người dùng</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Chức danh</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Phòng ban</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Nơi gửi /nhận văn bản</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Phòng ban chức danh</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Luồng chuyển văn bản</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Số văn bản</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Loại văn bản</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Người ký</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Mức độ khẩn</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục Uỷ quyền</a></li>
        </ul>
      </div>
    </div>

    <div class="my-3 group-menu-items">
      <div class="btn-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#document-collapse" aria-expanded="false" role="button" aria-controls="document-collapse">
        Từ điển
      </div>
      <div class="collapse ml-2" id="document-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal small mb-0">
          <li class="my-3"><a href="#" class="group-menu-item rounded">Tra cứu văn bản</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Tạo văn bản đến</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Tạo văn bản đi</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Tạo dự thảo văn bản đi</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Danh mục uỷ quyền xử lý văn bản</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Tra cứu văn bản LVP đã gửi</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Tra cứu văn bản LVP đã nhận</a></li>
        </ul>
      </div>
    </div>

    <div class="my-3 group-menu-items">
      <div class="btn-toggle collapsed" data-bs-toggle="collapse" data-bs-target="#report-collapse" aria-expanded="false" role="button" aria-controls="report-collapse">
        Báo cáo
      </div>
      <div class="collapse ml-2" id="report-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal small mb-0">
          <li class="my-3"><a href="#" class="group-menu-item rounded">Báo cáo văn bản - Administrator</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Báo cáo văn bản - Văn thư</a></li>
          <li class="my-3"><a href="#" class="group-menu-item rounded">Báo cáo văn bản - Người dùng</a></li>
        </ul>
      </div>
    </div>
      

      </section>
      <section class="main-container">
        <span class="toggle-btn" id="toggle-action"><i class='bx bx-menu' id="header-toggle"></i></span>
        <slot></slot>
      </section>
    </main>
    <script src="/public/boostrap/bootstrap.bundle.min.js"></script>
    `;

// The class extends `HTMLElement`, but actually it could extend any element, such as `HTMLImageElement`
class CustomLayout extends HTMLElement {
  constructor() {
    super();
    // this.innerHTML = htmlTemplate;
    const shadowOpen = this.attachShadow({ mode: "open" });
    const newTemplate = document.createElement("template");
 
    newTemplate.innerHTML =`
    <Link rel="stylesheet" href="/public/boostrap/bootstrap.min.css"/>
    <link rel="stylesheet" href="/dns-component/layout/layout.css"> 
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel="stylesheet"/> 
    ` + htmlTemplate;

    shadowOpen.append(newTemplate.content.cloneNode(true));
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
    // const shadowLayout = document.querySelector('dms-layout');
    // const toggle = shadowLayout.shadowRoot.querySelector(toggleId),
    //   nav = shadowLayout.shadowRoot.querySelector(navId);

    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    // Validate that all variables exist
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        // console.log(toggle);
        // show navbar
        nav.classList.toggle("expand");
      });
    }
  };

  showNavbar("toggle-action", "side-bar");
});

