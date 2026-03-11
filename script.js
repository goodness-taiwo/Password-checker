<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Strength Checker</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Password Strength Checker</h1>
        
        <div class="input-container">
            <input 
                type="password" 
                id="passwordInput" 
                placeholder="Enter your password"
            >
            <button id="toggleBtn" class="toggle-btn">👁️</button>
        </div>
        
        <div class="strength-meter">
            <div id="strengthBar" class="strength-bar"></div>
        </div>
        
        <p id="strengthText" class="strength-text">Enter a password</p>
        
        <div class="requirements">
            <h3>Requirements:</h3>
            <ul>
                <li id="req-length">❌ At least 8 characters</li>
                <li id="req-uppercase">❌ Contains uppercase letter</li>
                <li id="req-lowercase">❌ Contains lowercase letter</li>
                <li id="req-number">❌ Contains number</li>
                <li id="req-special">❌ Contains special character (!@#$%^&*)</li>
            </ul>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>