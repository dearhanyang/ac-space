// Cache control plugin for Docusaurus
// Adds proper cache control headers to index.html and other HTML files

/**
 * Cache control plugin configuration
 * @param {Object} context - Docusaurus context
 * @param {Object} options - Plugin options
 * @returns {Object} Plugin definition
 */
function CacheControlPlugin(context, options) {
  return {
    name: 'cache-control-plugin',

    // Called after the build is done
    postBuild({ outDir }) {
      const fs = require('fs');
      const path = require('path');

      // Function to add cache control meta tags to HTML files
      function addCacheControlMetaTags(htmlFilePath) {
        try {
          let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

          // Check if the meta tag already exists
          if (!htmlContent.includes('http-equiv="Cache-Control"')) {
            // Find the head tag and insert the cache control meta tag
            const headEndIndex = htmlContent.indexOf('</head>');
            if (headEndIndex !== -1) {
              const cacheControlMetaTag = '  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">\n  <meta http-equiv="Pragma" content="no-cache">\n  <meta http-equiv="Expires" content="0">\n';
              
              htmlContent = htmlContent.slice(0, headEndIndex) + cacheControlMetaTag + htmlContent.slice(headEndIndex);
              
              fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
              console.log(`Added cache control meta tags to: ${htmlFilePath}`);
            }
          }
        } catch (error) {
          console.error(`Error processing ${htmlFilePath}:`, error);
        }
      }

      // Process index.html
      const indexHtmlPath = path.join(outDir, 'index.html');
      if (fs.existsSync(indexHtmlPath)) {
        addCacheControlMetaTags(indexHtmlPath);
      }

      // Process other HTML files in the build output
      function processHtmlFiles(directory) {
        const files = fs.readdirSync(directory);
        
        files.forEach(file => {
          const filePath = path.join(directory, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            processHtmlFiles(filePath);
          } else if (path.extname(file) === '.html') {
            addCacheControlMetaTags(filePath);
          }
        });
      }

      processHtmlFiles(outDir);
    },
  };
}

module.exports = CacheControlPlugin;
