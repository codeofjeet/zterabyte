import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanValue(value: unknown, maxLength = 5000) {
  return String(value ?? "").trim().slice(0, maxLength);
}

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;
const smtpSecure = process.env.SMTP_SECURE === "true";
const enquiryToEmail = process.env.ENQUIRY_TO_EMAIL;

const transporter =
  smtpHost && smtpUser && smtpPassword
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
      })
    : null;

export async function POST(request: Request) {
  try {
    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPassword ||
      !enquiryToEmail ||
      !transporter
    ) {
      console.error("Contact email configuration is missing.");
      return Response.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = cleanValue(body.name, 100);
    const company = cleanValue(body.company, 150);
    const phone = cleanValue(body.phone, 50);
    const email = cleanValue(body.email, 254);
    const subject = cleanValue(body.subject, 200);
    const message = cleanValue(body.message, 5000);

    // Required fields
    if (!name || !phone || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company || "Not provided");
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Enquiry</title>
</head>

<body style="margin:0; padding:0; background:#f3f6f9; font-family:Arial, Helvetica, sans-serif; color:#071827;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f6f9; padding:30px 15px;">
    <tr>
      <td align="center">

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="max-width:680px; background:#ffffff; border-radius:14px; overflow:hidden;"
        >

          <!-- HEADER -->
          <tr>
            <td
              style="
                background:#071827;
                padding:26px 30px;
                text-align:center;
              "
            >
              <div
                style="
                  font-size:28px;
                  font-weight:800;
                  letter-spacing:1px;
                  color:#53A6FF;
                "
              >
                ZTERABYTE
              </div>

              <div
                style="
                  margin-top:6px;
                  font-size:12px;
                  color:#cbd5e1;
                "
              >
                We Build Digital Success For your Business
              </div>
            </td>
          </tr>

          <!-- TITLE -->
          <tr>
            <td style="padding:32px 30px 18px 30px;">
              <div
                style="
                  font-size:24px;
                  line-height:32px;
                  font-weight:700;
                  color:#071827;
                "
              >
                New Contact Enquiry
              </div>

              <div
                style="
                  margin-top:8px;
                  font-size:14px;
                  line-height:22px;
                  color:#64748b;
                "
              >
                A new message has been submitted through the ZTERABYTE website.
              </div>
            </td>
          </tr>

          <!-- CUSTOMER INFORMATION -->
          <tr>
            <td style="padding:0 30px 24px 30px;">

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  border:1px solid #e2e8f0;
                  border-radius:10px;
                  overflow:hidden;
                "
              >

                <tr>
                  <td
                    colspan="2"
                    style="
                      background:#eaf6ff;
                      padding:14px 16px;
                      font-size:15px;
                      font-weight:700;
                      color:#006cb5;
                    "
                  >
                    Customer Information
                  </td>
                </tr>

                <tr>
                  <td
                    width="35%"
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:13px;
                      font-weight:700;
                      color:#64748b;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:14px;
                      color:#071827;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:13px;
                      font-weight:700;
                      color:#64748b;
                    "
                  >
                    Company
                  </td>

                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:14px;
                      color:#071827;
                    "
                  >
                    ${safeCompany}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:13px;
                      font-weight:700;
                      color:#64748b;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:14px;
                      color:#071827;
                    "
                  >
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:13px;
                      font-weight:700;
                      color:#64748b;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding:13px 16px;
                      border-bottom:1px solid #e2e8f0;
                      font-size:14px;
                    "
                  >
                    <a
                      href="mailto:${safeEmail}"
                      style="color:#006cb5; text-decoration:none;"
                    >
                      ${safeEmail}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:13px 16px;
                      font-size:13px;
                      font-weight:700;
                      color:#64748b;
                    "
                  >
                    Subject
                  </td>

                  <td
                    style="
                      padding:13px 16px;
                      font-size:14px;
                      color:#071827;
                    "
                  >
                    ${safeSubject}
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- MESSAGE -->
          <tr>
            <td style="padding:0 30px 30px 30px;">

              <div
                style="
                  font-size:15px;
                  font-weight:700;
                  color:#006cb5;
                  margin-bottom:10px;
                "
              >
                Customer Message
              </div>

              <div
                style="
                  background:#f8fafc;
                  border:1px solid #e2e8f0;
                  border-radius:10px;
                  padding:18px;
                  font-size:14px;
                  line-height:24px;
                  color:#334155;
                "
              >
                ${safeMessage}
              </div>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td
              style="
                background:#071827;
                padding:20px 30px;
                text-align:center;
              "
            >
              <div
                style="
                  font-size:12px;
                  line-height:20px;
                  color:#94a3b8;
                "
              >
                This enquiry was submitted through the ZTERABYTE website.
              </div>

              <div
                style="
                  margin-top:5px;
                  font-size:12px;
                  color:#64748b;
                "
              >
                ZTERABYTE • Digital Solutions for Your Business
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

    await transporter.sendMail({
      from: `"ZTERABYTE Website" <${smtpUser}>`,
      to: enquiryToEmail,
      replyTo: email,
      subject: `New Contact Enquiry | ${subject}`,
      html,
    });

    return Response.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form email error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to send your message right now. Please try again.",
      },
      { status: 500 }
    );
  }
}