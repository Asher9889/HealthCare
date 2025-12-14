<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:template match="/">
<html>
<head>
  <title>XML Sitemap</title>
  <style>
    :root {
      --green: #9acd32;
      --border: #e5e7eb;
      --text: #111827;
      --muted: #6b7280;
      --bg: #ffffff;
    }

    body {
      margin: 0;
      padding: 40px 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Helvetica, Arial, sans-serif;
      color: var(--text);
      background: var(--bg);
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
    }

    h2 {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .subtitle {
      color: var(--muted);
      margin-bottom: 24px;
      font-size: 14px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border: 1px solid var(--border);
      background: white;
    }

    th, td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      text-align: left;
      vertical-align: middle;
      word-break: break-all;
    }

    th {
      background: var(--green);
      color: #fff;
      font-weight: 600;
      font-size: 14px;
    }

    tr:hover td {
      background: #f9fafb;
    }

    a {
      color: #2563eb;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .lastmod {
      white-space: nowrap;
      color: #374151;
      font-size: 14px;
    }
  </style>
</head>

<body>
  <div class="container">

    <xsl:choose>

      <!-- ========================= -->
      <!-- SITEMAP INDEX -->
      <!-- ========================= -->
      <xsl:when test="s:sitemapindex">
        <h2>XML Sitemap Index</h2>
        <div class="subtitle">
          This sitemap contains
          <xsl:value-of select="count(s:sitemapindex/s:sitemap)"/>
          URLs.
        </div>

        <table>
          <tr>
            <th>URL</th>
            <th>Last Modified</th>
          </tr>
          <xsl:for-each select="s:sitemapindex/s:sitemap">
            <tr>
              <td>
                <a href="{s:loc}">
                  <xsl:value-of select="s:loc"/>
                </a>
              </td>
              <td class="lastmod">
                <xsl:value-of select="s:lastmod"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </xsl:when>

      <!-- ========================= -->
      <!-- URL SET -->
      <!-- ========================= -->
      <xsl:when test="s:urlset">
        <h2>URL Sitemap</h2>
        <div class="subtitle">
          This sitemap contains
          <xsl:value-of select="count(s:urlset/s:url)"/>
          URLs.
        </div>

        <table>
          <tr>
            <th>URL</th>
          </tr>
          <xsl:for-each select="s:urlset/s:url">
            <tr>
              <td>
                <a href="{s:loc}">
                  <xsl:value-of select="s:loc"/>
                </a>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </xsl:when>

    </xsl:choose>

  </div>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
