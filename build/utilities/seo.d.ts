/**
 * Sets the `og:image` meta tag for social sharing.
 * - On product and category pages: Uses the product thumbnail image or category image as the `og:image`.
 * - On other pages: Retrieves the `og:image` value from the SEO component configured in the admin panel.
 */
export declare function setSEOOgImage(ogImage: string, page: any): void;
export declare function setSEODetails(page: any): void;
