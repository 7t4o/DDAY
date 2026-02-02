/**
 * Admin auth guard: redirect to login if no token in localStorage.
 * Include this script first on every protected admin page.
 */
(function () {
    var TOKEN_KEY = 'admin_token';
    var LOGIN_URL = './login.html';

    if (!localStorage.getItem(TOKEN_KEY)) {
        window.location.replace(LOGIN_URL);
    }
})();
