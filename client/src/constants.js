export const checkerDescriptions = {
  globalCode:
    'Global code is code that affects your entire website or web app.',
  headings:
    'Heading elements (such as h1, h2, h3, etc.) help break up the content of the page into related sets of information. They are important for helping people who use assistive technology like screen-readers to understand the meaning of a page and its content.',
  images:
    "Images are a common way to convey a variety of information on websites.  Having accessible code that uses 'alt' attributes ensures that screen readers are able to describe your images to visitors who may have visual impairments.",
  controls:
    'Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action on your website or app.',
  structuralHTML:
    'Introductory content on your site should be wrapped in a <header> element.  The <section> element designates a standalone portion of your site. Forms allow people to enter information into a site for processing and manipulation.',
};

export const failingSuggestions = {
  alt:
    "Add more alt attributes to your <img> elements.  Alt attributes (also called alt text) give a description of an image for people who may not be able to view them. When an alt attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image’s content.",
  emptyAlt:
    "Decorative images are null, or empty, alt attributes are made by including no information between the opening and closing quotes of an alt attribute and are used to indicate that images are for decorative purposes. Decorative images do not communicate information that is required to understand the website's overall meaning. Historically they were used for flourishes and spacer gif images, but tend to be less relevant for modern websites and web apps.",
  langAttr:
    'Include a lang attribute on the <html> element.  This helps assistive technology such as screen readers to pronounce content correctly.',
  hrefAttr:
    'Add href attributes to your anchor (<a>) element links.  Links declared with an anchor element should always have a href attribute, even when used in Single Page Applications (SPAs). Without a href attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an onclick event instead of a href attribute.',
  targetAttr:
    "Avoid links that open in a new tab or window. If this is unavoidable, ensure the link's behavior will be communicated in a way that is apparent to all users. Doing this will help people understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users.",
  buttons:
    'Use the <button> element for buttons.  Buttons are used to submit data or perform an on-screen action which does not shift keyboard focus. You can add type="button" to a button element to prevent the browser from attempting to submit form information when activated.',

  h1Tag:
    "The h1 element should be used to communicate the overall purpose of the page or view at a high-level. Do not use the h1 element for a heading that persists between pages or views (for example, the site's title or a navigation bar component).",
  logicSequence:
    'Some of your heading elements are out of order.  The order of heading elements should descend, based on the “depth” of the content. For example, a h3 element should not appear on a page before the first h2 element declaration. A tool such as the headingsMap Google Chrome extension can help you evaluate this.',
  formLabels:
    'Include a label attribute on your form input to help everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.',
  headerTag:
    'Add a <header> element to your site. The HTML header element helps programmatically define the essential semantic structure of a page.  It represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.',
  sectionTag:
    'Use <section> elements properly.  The section element is intended to be a container for content that has a related theme, not for use as a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, we encourage you to use the div element instead.',
  autofocus:
    'Avoid using the autofocus attribute. People who are blind or who have low vision may be disoriented when page focus is moved without their permission. Additionally, autofocus can be problematic for people with motor control disabilities, as it may create extra work for them to navigate out from the autofocused area and to other locations on the page/view.',
  skipHeadings:
    "Do not skip heading levels.  For example, don't jump from a h2 to a h4, skipping an h3 element. If a level is skipped, the user may be confused and think that they have missed a section of content. If your heading levels are being skipped for a specific visual treatment, use CSS classes or change the text size instead.",
};

export const passingFeedback = {
  alt:
    "Alt attributes (also called alt text) give a description of an image for people who may not be able to view them. When an alt attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image’s content.",
  emptyAlt:
    "Null, or empty, alt attributes are made by including no information between the opening and closing quotes of an alt attribute and are used to indicate that images are for decorative purposes. Decorative images do not communicate information that is required to understand the website's overall meaning. Historically they were used for flourishes and spacer gif images, but tend to be less relevant for modern websites and web apps.",
  langAttr:
    'This helps assistive technology such as screen readers to pronounce content correctly.',
  hrefAttr:
    'Links declared with an anchor element should always have a href attribute, even when used in Single Page Applications (SPAs). Without a href attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an onclick event instead of a href attribute.',
  targetAttr:
    "Including a 'target' attribute on links declared with an anchor element will help users understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users.",
  buttons:
    'Buttons created using the <button> element are used to submit data or perform an on-screen action which does not shift keyboard focus. You can add type="button" to a button element to prevent the browser from attempting to submit form information when activated.',
  h1Tag:
    "The h1 element should be used to communicate the overall purpose of the page or view at a high-level. Do not use the h1 element for a heading that persists between pages or views (for example, the site's title or a navigation bar component).",
  logicSequence:
    'The order of heading elements should descend, based on the “depth” of the content. For example, a h3 element should not appear on a page before the first h2 element declaration. A tool such as the headingsMap Google Chrome extension can help you evaluate this.',
  formLabels:
    'Including a label attribute on your form input helps everyone better understand its purpose. In some cases, the purpose may be clear enough from the context when the content is rendered visually, though it still needs to be provided within the code to support other forms of presentation and interaction, such as for screen reader and speech input users.',
  headerTag:
    'The HTML header element helps programmatically define the essential semantic structure of a page.  It represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.',
  sectionTag:
    'The section element is intended to be a container for content that has a related theme, not for use as a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, we encourage you to use the div element instead.',
  autofocus:
    'People who are blind or who have low vision may be disoriented when page focus is moved without their permission. Additionally, autofocus can be problematic for people with motor control disabilities, as it may create extra work for them to navigate out from the autofocused area and to other locations on the page/view.',
  skipHeadings:
    'Heading elements help users understand what information is contained in webpages and how that information is organized. When headings are clear and descriptive, users can find the information they seek more easily, and they can understand the relationships between different parts of the content more easily.',
};
