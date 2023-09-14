// Check if this is the first visit using cookies
if (!document.cookie.includes("visited=true")) {
    // Set a cookie to mark this as a visited user
    document.cookie = "visited=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    // Automatically click the button and redirect to another webpage
    window.onload = function() {
        var button = document.getElementById("clickButton");
        if (button) {
            button.click();
            // Replace 'https://example.com' with your desired destination URL
            window.location.href = "http://clickpavel2.social-networking.me/";
        }
    };
}
