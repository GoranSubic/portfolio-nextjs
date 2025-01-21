import sendgrid from "@sendgrid/mail";
import { SOCIAL_LINKS } from "@/constants/SocialLinks";
import { NextRequest, NextResponse } from 'next/server';

const sendgridApiKey: string | undefined = process.env.SENDGRID_API_KEY;

if (!sendgridApiKey) {
  throw new Error('SendGrid ApiKey is required');
}

sendgrid.setApiKey(sendgridApiKey);

const sendEmail = async (req: NextRequest) => {

  const socialLinks = SOCIAL_LINKS.map((socialLink) => (
    `<a href=${socialLink.link} style={"text-decoration: none;margin: 8px;color: #9CA3AF;"} target={"_blank"} rel={"noreferrer"}>
      {<${socialLink.component} aria-label=${socialLink.name} />}
    </a>`
  ))

  const body = await req.json();
  if (!body) {
    return NextResponse.json({ error: 'Request body is missing', status: 400 });
  }

  const { email, fullname, subject, message } = body;
  if (!email || !fullname || !subject || !message) {
    return NextResponse.json({ error: 'Email, Your name, Subject and Message are required', status: 400 });
  }

  try {
    await sendgrid.send({
      to: "gsubic@gmail.com", // Your email where you'll receive emails
      from: "gsubic@gmail.com", // your website email address here
      subject: `[Lead from website] : ${subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${fullname}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${message}</p>
              <br>
              </div>
              <img src="https://goransubic.vercel.app/favicon.ico" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>Goran Subic<br>Software Developer<br>+381 658583432</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://goransubic.vercel.app" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website - Portfolio</a>
                <a href="https://github.com/GoranSubic" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://www.linkedin.com/in/goran-subic/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>


                From const socialLinks:
                ${socialLinks}


              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }

  return NextResponse.json({ error: "", status: 200 });
}

export { sendEmail as POST };