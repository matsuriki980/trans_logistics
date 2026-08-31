/*
 フェードイン スクロールアニメーション
*/
export const initScroll = () => {
  const fadeInProcess = (entries) => {
    entries.forEach((entry) => {
      // 要素が交差したら…
      if (entry.isIntersecting) {
        const target = entry.target;
        const items = target.querySelectorAll(".js-fade-in-item");
        const delayItems = target.querySelectorAll(".js-fade-in-item--delay");

        items.forEach((item) => {

          // 時間差でフェードイン
          if (item.classList.contains("js-fade-in-item--delay")) {
            setTimeout(() => {
              delayItems.forEach((delayItem, index) => {
                setTimeout(() => {
                  delayItem.classList.add("is-scroll-active");
                }, index * 300);
              });
            }, 800);
          } else {
            item.classList.add("is-scroll-active");
          }
        });
      }
    });
  };

  // オプション設定
  const option = {
    root: null,
    rootMargin: "-50% 0px",
  };

  // インスタンス生成
  const observer = new IntersectionObserver(fadeInProcess, option);

  // 監視対象にしたい要素を渡す
  document.querySelectorAll(".js-fade-in-trigger").forEach((el) => {
    observer.observe(el);
  });
};
