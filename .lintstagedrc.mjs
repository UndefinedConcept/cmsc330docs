/** @type {import("@commitlint/config-conventional").Config} */
export default {
  '*.{astro,js,ts}': 'eslint --fix',
  '*.{astro,mdx}': 'prettier --write',
};
