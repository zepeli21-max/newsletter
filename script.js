// 간단한 구독 알림 기능
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("구독이 완료되었습니다! 🎉");
    });
  });
});
