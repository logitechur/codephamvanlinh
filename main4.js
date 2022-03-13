!(function () {
  function f() {
    var a = document.createElement("div");
    a.id = "warning-wrapper";
    a.innerHTML = `
      <div class="inner-warning">
        <div class="warning-header">
          <h2>Đã phát hiện Ad Blocker</h2>
          <p>Vui lòng tắt trình chặn quảng cáo của bạn để tiếp tục!</p>
        </div>
        <div class="warning-button">
          <button class="1 active">Adblock</button>
          <button class="2">Adblock Plus</button>
        </div>
        <div class="warning-body">
          <div class="1 active">
            <ol>
              <li>Click on the AdBlock icon in your browser.<br />Nhấp vào biểu tượng AdBlock trong trình duyệt của bạn.<br /><img src="https://1.bp.blogspot.com/-Ex7z6eA9ces/YQrVfun2K8I/AAAAAAAABDw/RxUSKuO4YY8jbD-bnbv145FhxZeiN1OGQCLcBGAsYHQ/s0/adblock-1.png" alt="Adblock" width="250px" /></li>
              <li>Choose, Don\'t run on pages on this domain.<br />Chọn "Always".<br /><img src="https://1.bp.blogspot.com/-fXwzj9Ha_Ko/YQrVf00eLII/AAAAAAAABD0/4di3ns82J9I9IhtYVnOg0dPr6NGnArL2wCLcBGAsYHQ/s0/adblock-2.png" alt="Adblock" width="300px" /></li>
              <li>The browser icon should have turned green.<br />Biểu tượng trình duyệt phải chuyển sang màu xanh lá.<br /><img src="https://1.bp.blogspot.com/-C_2jfELNPIY/YQrVf_4NhoI/AAAAAAAABD4/ZKsh6fA1Oeoa2EQkWS2YY0RcY9Kkg2LoACLcBGAsYHQ/s0/adblock-3.png" alt="Adblock" width="250px" /></li>
              <li>Refresh the page if it didn\'t refresh automatically. Thanks!<br />Làm mới trang nếu nó không tự động làm mới. Cảm ơn bạn rất nhiều!</li>
            </ol>
          </div>
          <div class="2">
            <ol>
              <li>Click on the AdBlock Plus icon in your browser.<br />Nhấp vào biểu tượng AdBlock Plus trong trình duyệt của bạn.<br /><img src="https://1.bp.blogspot.com/-8d2Bl23C9Xg/YQrVgTh6iHI/AAAAAAAABD8/lntYTHhHEaomypY1h8uhtXb7xDELTTV2QCLcBGAsYHQ/s0/adblock-4.png" alt="Adblock" width="250px" /></li>
              <li>Click the "This Website" button.<br />Nhấp vào nút "Trang web này".<br /><img src="https://1.bp.blogspot.com/-pbintRNc8zE/YQrVgvfRNzI/AAAAAAAABEE/4M5LrWVNVQ0S7_bkvwS1FzKPU3nSTgJFgCLcBGAsYHQ/s0/adblock-5.png" alt="Adblock" width="300px" /></li>
              <li>The browser icon should have turned grey.<br />Biểu tượng trình duyệt phải chuyển sang màu xám.<br /><img src="https://1.bp.blogspot.com/-a0uQ3dyZrOQ/YQrVgp5dnfI/AAAAAAAABEA/HSuGCzHRajY9Vg3RWpeK991MXbJDkXAowCLcBGAsYHQ/s0/adblock-6.png" alt="Adblock" width="250px" /></li>
            </ol>
          </div>
        </div>
      </div>
    `;

    document.body.append(a);
    document.body.style.overflow = "hidden";
    var b = a.querySelectorAll("button");
    a.querySelector(".close");
    var d = a.querySelectorAll(".warning-body > div");
    for (a = 0; a < b.length; a++)
      b[a].addEventListener("click", function (a) {
        a.preventDefault();
        a = this.getAttribute("class").split(" ")[0];
        for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
        b[a - 1].classList.add("active");
        d[a - 1].classList.add("active");
      });
  }
  var b = document.createElement("script");
  b.type = "text/javascript";

  b.async = !0;
  b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
  b.onerror = function () {
    f();
    window.adblock = !0;
  };
  var e = document.getElementsByTagName("script")[0];
  e.parentNode.insertBefore(b, e);
})();
