/*
 ページトップボタン
*/
export const initPageTopBtn = () => {
  const pageTopBtn = document.querySelector(".js-page-top-btn");
  const pageTopBtnTrigger = document.querySelector(".js-page-top-btn-trigger");

  if (!pageTopBtn || !pageTopBtnTrigger) return;

  // 900px以上の時のみ実行する
  const pageTopBtnProcess = () => {
    const pageTopBtnToggle = (entries) => {
      if (window.innerWidth >= 899) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            pageTopBtn.classList.add("is-active");
          } else {
            pageTopBtn.classList.remove("is-active");
          }
        });
      }
    };
    // オプション設定
    const option = {
      root: null,
    };

    // インスタンス生成
    const observer = new IntersectionObserver(pageTopBtnToggle, option);

    observer.observe(pageTopBtnTrigger);
  };

  pageTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // リサイズ時の処理
  window.addEventListener("resize", pageTopBtnProcess);

  // 初回実行
  pageTopBtnProcess();
};
