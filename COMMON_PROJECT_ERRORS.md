### ERROR: DYNAMIC_SERVER_USAGE

We are getting the following error **ON PRODUCTION ONLY**:

⨯ [Error: An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.] {
digest: 'DYNAMIC_SERVER_USAGE'
}

This is happening on `/news/[slug]` routes, which you can find in `app/news/[slug]/page.tsx`. Please help me understand the issue and let's create a fix for this. Other pages are working fine.

---

### SOLUTION:

The root cause is using a dynamic server API during static generation.

- When generating static params (`generateStaticParams`), the code was also calling `draftMode()` from PayloadCMS.
- `draftMode()` is a dynamic function (it relies on request-time data like cookies) and cannot be used during the build process, which is a static context.
- The fix is to remove the `draftMode()` call from `generateStaticParams` and only query for data that is needed to build the static paths (e.g., the slugs of published articles).
