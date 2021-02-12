export const checkerDescriptions = {
  globalCode:
    'Global code is code that affects your entire website or web app.',
  headings:
    'Heading elements (such as h1, h2, h3, etc.) help break up the content of the page into related sets of information. They are important for helping people who use assistive technology like screen-readers to understand the meaning of a page and its content.',
  images:
    "Images are a common way to convey a variety of information on websites.  Having accessible code that uses 'alt' attributes ensures that screen readers are able to describe your images to visitors who may have visual impairments.",
  controls:
    'Controls are interactive elements such as links and buttons that let a person navigate to a destination or perform an action on your website or app.',
};

export const checkerSuggestions = {
  noAlt:
    "Add more alt attributes to your <img> elements.  Alt attributes (also called alt text) give a description of an image for people who may not be able to view them. When an alt attribute isn't present on an image, a screen reader may announce the image's file name and path instead. This fails to communicate the image’s content.",
  emptyAlt:
    "Null, or empty, alt attributes are made by including no information between the opening and closing quotes of an alt attribute and are used to indicate that images are for decorative purposes. Decorative images do not communicate information that is required to understand the website's overall meaning. Historically they were used for flourishes and spacer gif images, but tend to be less relevant for modern websites and web apps.",
  langAttr:
    'Include a lang attribute on the <html> element.  This helps assistive technology such as screen readers to pronounce content correctly.',
  hrefAttr:
    'Add href attributes to your anchor (<a>) tag links.  Links declared with an anchor tag should always have a href attribute, even when used in Single Page Applications (SPAs). Without a href attribute, the link will not be properly exposed to assistive technology. An example of this would be a link that uses an onclick event instead of a href attribute.',
  targetAttr:
    "Avoid links that open in a new tab or window. If this is unavoidable, ensure the link's behavior will be communicated in a way that is apparent to all users. Doing this will help people understand what will happen before activating the link. While this technique is technically not required for compliance, it is an often-cited area of frustration for many different kinds of assistive technology users.",
  h1Tag:
    "The h1 element should be used to communicate the overall purpose of the page or view at a high-level. Do not use the h1 element for a heading that persists between pages or views (for example, the site's title or a navigation bar component).",
  logicSequence:
    'Some of your heading elements are out of order.  The order of heading elements should descend, based on the “depth” of the content. For example, a h3 element should not appear on a page before the first h2 element declaration. A tool such as the headingsMap Google Chrome extension can help you evaluate this.',
};
