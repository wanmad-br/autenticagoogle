document.addEventListener('DOMContentLoaded', function() {
    const googleLoginButton = document.getElementById('google-login-button');

    googleLoginButton.addEventListener('click', function() {
        const clientId = 'YOUR_GOOGLE_CLIENT_ID';
        const redirectUri = 'http://localhost:8080/auth/google/callback';
        const scope = 'profile email';
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

        window.location.href = authUrl;
    });

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        fetch('/auth/google/callback?code=' + code)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Handle successful login
                    console.log('User logged in:', data.user);
                    // Redirect or update UI accordingly
                } else {
                    // Handle login failure
                    console.error('Login failed:', data.message);
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
    }
});