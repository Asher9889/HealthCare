<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:template match="/">
<html>
<head>
  <title>XML Sitemap</title>
  <style>
    body { font-family: Arial, sans-serif; }
    table { border-collapse: collapse; width: 100%; }
    th, td { padding: 10px; border: 1px solid #ddd; }
    th { background: #9acd32; text-align: left; }
  </style>
</head>
<body>
  <h2>XML Sitemap Index</h2>
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
        <td>
          <xsl:value-of select="s:lastmod"/>
        </td>
      </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>

</xsl:stylesheet>
