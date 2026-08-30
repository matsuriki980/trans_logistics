/*
 ページトップボタン
*/
export const initPageTopBtn = () => {
  // 900px以上の時のみ実行する
  const pageTopBtnProcess = () => {
    if (window.innerWidth >= 899) {
      const pageTopBtn = document.querySelector(".js-page-top-btn");

      if (!pageTopBtn) return;

      // クラス付与の処理を書く
      const pageTopBtnToggleClass = (entries) => {
        entries.forEach((entry) => {
          // 要素が交差したら…
          if (entry.isIntersecting) {
            // クラスをつける
            pageTopBtn.classList.remove("is-active");
          } else {
            // クラスを外す
            pageTopBtn.classList.add("is-active");
          }
        });
      };

      // オプション設定
      const option = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      // インスタンス生成
      const observer = new IntersectionObserver(pageTopBtnToggleClass, option);

      // 監視対象にしたい要素を渡す
      document.querySelectorAll(".js-fade-in-trigger").forEach((el) => {
        observer.observe(el);
      });

      //  ボタンクリックでページトップに移動
      pageTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  };

  // リサイズ時の処理
  window.addEventListener("resize", pageTopBtnProcess);

  // 初回実行
  pageTopBtnProcess();
};
