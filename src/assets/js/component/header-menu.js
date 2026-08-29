/*
 ヘッダーメニュー
*/
export const initHeaderMenu = () => {
  const headerMenuBtn = document.querySelector(".js-header-menu-btn");
  const headerMenu = document.querySelector(".js-header-menu");
  const body = document.querySelector("body");

  if (!headerMenuBtn || !headerMenu) return;
  const headerMenuElement = [headerMenuBtn, headerMenu];

  // クラス付与の処理を書く
  const HamburgerMenuToggleClass = (el) => {
    el.classList.toggle("js-menu-open");
    if (el.classList.contains("js-menu-open")) {
      body.classList.add("u-scroll-hidden");
    } else {
      body.classList.remove("u-scroll-hidden");
    }
  };

  const hamburgerMenu = () => {
    // クリックイベント クラス付与
    headerMenuBtn.addEventListener("click", () => {
      if (window.innerWidth <= 899) {
        headerMenuElement.forEach((el) => {
          HamburgerMenuToggleClass(el);
        });
      }
    });
  };

  // 900px以上の時、クラスを外す
  const handleResize = () => {
    if (window.innerWidth >= 900) {
      headerMenuElement.forEach((el) => {
        el.classList.remove("js-menu-open");
      });

      body.classList.remove("u-scroll-hidden");
    }
  };

  // リサイズ時の処理
  window.addEventListener("resize", handleResize);

  // 初回実行
  hamburgerMenu();
};
