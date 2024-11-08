document.addEventListener("DOMContentLoaded", function() {
  if (window.top === window.self) {
      // Not in an iframe - redirect to 403 page
      window.location.href = 'https://developers-fun.org/403.html';
  } else {
      // In an iframe, check the parent domain
      try {
          const parentDomain = new URL(document.referrer).hostname;
          if (parentDomain !== 'developers-fun.com') {
              // Redirect to 403 page
              window.location.href = 'https://developers-fun.org/403.html';
          }
      } catch (e) {
          // Handle potential errors (e.g., cross-origin) - redirect to 403 page
          window.location.href = 'https://developers-fun.org/403.html';
      }
  }
});
