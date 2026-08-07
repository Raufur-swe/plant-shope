export const otpTemplate = (name, otp) => {
    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>

body{
background:#f5f5f5;
font-family:Arial,sans-serif;
padding:40px;
}

.container{
max-width:600px;
margin:auto;
background:#fff;
border-radius:12px;
padding:40px;
box-shadow:0 5px 15px rgba(0,0,0,.1);
}

.logo{
font-size:28px;
font-weight:bold;
color:#16a34a;
text-align:center;
}

.title{
font-size:24px;
margin-top:30px;
font-weight:bold;
text-align:center;
}

.text{
font-size:16px;
line-height:28px;
color:#555;
margin-top:20px;
}

.otp{
margin:35px auto;
width:220px;
padding:18px;
background:#16a34a;
color:white;
font-size:34px;
font-weight:bold;
letter-spacing:10px;
text-align:center;
border-radius:10px;
}

.warning{
color:#dc2626;
font-size:14px;
margin-top:25px;
}

.footer{
margin-top:40px;
font-size:13px;
color:#888;
text-align:center;
}

</style>

</head>

<body>

<div class="container">

<div class="logo">
🌿 RAIZ
</div>

<div class="title">
Verify Your Email
</div>

<p class="text">

Hi <b>${name}</b>,

<br><br>

Thank you for registering with RAIZ (palnt-shop).

Please use the following One-Time Password (OTP) to verify your email address.

</p>

<div class="otp">
${otp}
</div>

<p class="text">

This OTP is valid for <b>5 minutes</b>.

Please do not share this code with anyone.

</p>

<p class="warning">

If you did not request this verification, you can safely ignore this email.

</p>

<div class="footer">

© ${new Date().getFullYear()} Plant Shop

</div>

</div>

</body>

</html>
`;
};