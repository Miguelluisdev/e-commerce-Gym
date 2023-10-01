// Aguarde o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function () {
  // Botão "Aceitar" para concordar com a política de privacidade
  const acceptButton = document.getElementById("accept-button");
  const privacyNotice = document.getElementById("privacy-notice");

  acceptButton.addEventListener("click", function () {
    // Defina um cookie para rastrear a aceitação da política de privacidade (ou use outra forma de armazenamento)
    document.cookie = "privacy_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Oculte a notificação de política de privacidade
    privacyNotice.style.display = "none";
  });

  // Aviso de cookies
  const cookieNotice = document.getElementById("cookie-notice");
  const closeCookieNotice = document.getElementById("close-cookie-notice");

  closeCookieNotice.addEventListener("click", function () {
    // Oculte o aviso de cookies
    cookieNotice.style.display = "none";
  });

  // Verifique se o usuário já aceitou a política de privacidade
  if (document.cookie.indexOf("privacy_accepted=true") === -1) {
    // Se o cookie de aceitação não estiver definido, mostre a notificação de política de privacidade
    privacyNotice.style.display = "block";
  }

  // Verifique se o aviso de cookies já foi fechado
  if (localStorage.getItem("cookie_notice_closed") !== "true") {
    // Se o aviso de cookies não tiver sido fechado, mostre-o
    cookieNotice.style.display = "block";
  }
});
