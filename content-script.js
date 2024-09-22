window.addEventListener('load', (event) => {
  function insertContent() {
    // Select the meta tag that contains the Open Graph image (og:image)
    const ogImageMeta = document.querySelectorAll('meta[property="og:image"]')[1];
    
    if (ogImageMeta && ogImageMeta.content) {
      const newElement = document.createElement("div");
      // creating the watermark free iamge link and it's element
      new_link =  ogImageMeta.content.replace('600w', '600nw');
      newElement.innerHTML = `Watermark Free Image: <a target="_blank" href="${new_link}">Download</a>`;
      
      // Style the new element (optional, for visual clarity)
      newElement.style.backgroundColor = "#f0f0f0";
      newElement.style.padding = "20px";
      newElement.style.border = "2px solid #ccc";
      newElement.style.width = "100%";
      newElement.style.textAlign = "center";
      newElement.style.fontFamily = "Arial, sans-serif";
      newElement.style.fontSize = "20px";
      
      // Insert the new element right after the opening <body> tag
      document.body.insertAdjacentElement('afterbegin', newElement);

      // Stop observing DOM changes once the element is found
      observer.disconnect();
    } else {
      console.log("No meta tag with property='og:image' found");
    }
  }
  
  // Set up a MutationObserver to detect dynamic changes in the DOM
  const observer = new MutationObserver(insertContent);
  
  // Observe changes in the document body and subtree
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Run the replacement function immediately in case the element is already available
  insertContent();
});
