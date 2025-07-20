TITLE: Import Payload Collection Types in TypeScript
DESCRIPTION: This snippet demonstrates how to import essential TypeScript types, `CollectionConfig` and `SanitizedCollectionConfig`, from the 'payload' module. These types facilitate type-safe configuration of Payload collections, with `CollectionConfig` representing the raw configuration and `SanitizedCollectionConfig` used internally after sanitization.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/collections.mdx#_snippet_13

LANGUAGE: ts
CODE:

```
import type { CollectionConfig, SanitizedCollectionConfig } from 'payload'
```

---

TITLE: Payload CMS Field Configuration Properties Reference
DESCRIPTION: A comprehensive reference for configuring fields in Payload CMS, including properties for naming, labeling, validation, indexing, access control, and localization. Each property defines a specific aspect of how a field behaves and interacts with the database and Admin Panel.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/code.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:

```
PayloadCMSFieldConfigOptions:
  name: string
    description: To be used as the property name when stored and retrieved from the database. This field is required.
  label: string | object
    description: Text used as a field label in the Admin Panel or an object with keys for each language.
  unique: boolean
    description: Enforce that each entry in the Collection has a unique value for this field.
  index: boolean
    description: Build an index for this field to produce faster queries. Set this field to `true` if your users will perform queries on this field's data often.
  minLength: number
    description: Used by the default validation function to ensure values are of a minimum character length.
  maxLength: number
    description: Used by the default validation function to ensure values are of a maximum character length.
  validate: function
    description: Provide a custom validation function that will be executed on both the Admin Panel and the backend.
  saveToJWT: boolean
    description: If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT.
  hooks: object
    description: Provide Field Hooks to control logic for this field.
  access: object
    description: Provide Field Access Control to denote what users can see and do with this field's data.
  hidden: boolean
    description: Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel.
  defaultValue: any
    description: Provide data to be used for this field's default value.
  localized: boolean
    description: Enable localization for this field. Requires localization to be enabled in the Base config.
```

---

TITLE: PayloadCMS Validation Context (ctx) Object Properties
DESCRIPTION: Details the properties available within the `ctx` object passed to custom validation functions in PayloadCMS. These properties provide access to document data, operation type, user information, and more.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_15

LANGUAGE: APIDOC
CODE:

```
ValidationContext (ctx) Properties:
- data: An object containing the full collection or global document currently being edited.
- siblingData: An object containing document data that is scoped to only fields within the same parent of this field.
- operation: Will be 'create' or 'update' depending on the UI action or API call.
- path: The full path to the field in the schema, represented as an array of string segments, including array indexes. I.e ['group', 'myArray', '1', 'textField'].
- id: The id of the current document being edited. id is undefined during the create operation.
- req: The current HTTP request object. Contains payload, user, etc.
- event: Either 'onChange' or 'submit' depending on the current action. Used as a performance opt-in.
```

---

TITLE: Configure Fields Property in Payload Collection Config
DESCRIPTION: This TypeScript snippet demonstrates how to access the `fields` property within a Payload `CollectionConfig`. The `fields` array is where all schema definitions for a collection's documents are defined. This is a foundational step for structuring data in Payload.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_0

LANGUAGE: typescript
CODE:

```
import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  // ...
  fields: [
    // highlight-line
    // ...
  ],
}
```

---

TITLE: Defining a Simple Payload CMS Configuration (TypeScript)
DESCRIPTION: This snippet illustrates the most basic Payload CMS configuration. It initializes Payload using `buildConfig`, sets a secret from environment variables, configures the MongoDB database adapter with a connection URL, and defines a single collection named 'pages' with a 'title' text field. This serves as a foundational example for setting up a new Payload project.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/overview.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:

```
import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
      ],
    },
  ],
})
```

---

TITLE: Define a Basic Payload Collection Configuration in TypeScript
DESCRIPTION: This TypeScript snippet demonstrates how to define a simple Payload Collection configuration. It imports the `CollectionConfig` type and exports a constant `Posts` object, specifying a slug and a basic text field named 'title'. This serves as a foundational example for structuring collection data.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/collections.mdx#_snippet_1

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
```

---

TITLE: Define Field-level Hooks in Payload
DESCRIPTION: Shows how to add the `hooks` property to a field configuration in Payload CMS to define granular, field-specific logic, complementing document-level hooks.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_5

LANGUAGE: ts
CODE:

```
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  // highlight-start
  hooks: {
    // ...
  },
  // highlight-end
}
```

---

TITLE: Additional Props for Payload Server Field Components
DESCRIPTION: Describes the extra properties exclusively available to Payload Server Components. These include the serializable client field config, the original field config, current document data, i18n object, Payload class instance, field permissions, sibling data, and the field's render-time value.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_30

LANGUAGE: APIDOC
CODE:

```
Property: clientField
  Description: The serializable Client Field Config.
Property: field
  Description: The Field Config.
Property: data
  Description: The current document being edited.
Property: i18n
  Description: The i18n object.
Property: payload
  Description: The Payload class.
Property: permissions
  Description: The field permissions based on the currently authenticated user.
Property: siblingData
  Description: The data of the field's siblings.
Property: user
  Description: The currently authenticated user.
Property: value
  Description: The value of the field at render-time.
```

---

TITLE: Payload Field Configuration Properties
DESCRIPTION: Defines the core properties available for configuring fields in Payload CMS, including `type`, `name`, `hooks`, `access`, and `defaultValue`.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:

```
Field:
  type: string (required)
    Description: Matches the field to its corresponding Field Type.
  name: string (required for Data Fields)
    Description: Key for storing and retrieving the field's value in the database. Must be unique among siblings.
    Forbidden values: __v, salt, hash, file
  hooks: object (optional)
    Description: Defines field-level hooks for granular logic.
  access: object (optional)
    Description: Defines field-level access control for granular permissions.
  defaultValue: any | function (optional)
    Description: Prefills fields with initial values.
    Static value: Applied to database schema/models.
    Function:
      Parameters:
        user: object (authenticated user object)
        locale: string (currently selected locale)
        req: PayloadRequest (PayloadRequest object)
      Returns: any (the default value)
      Async support: Yes (can use req.payload for API requests)
```

---

TITLE: Authenticate Payload Users with JWT Authorization Header
DESCRIPTION: This example demonstrates how to log in a user and then use the returned JWT token in the `Authorization` header to make subsequent authenticated requests to a Payload CMS instance.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/authentication/jwt.mdx#_snippet_0

LANGUAGE: ts
CODE:

```
const user = await fetch('http://localhost:3000/api/users/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'dev@payloadcms.com',
    password: 'password',
  }),
}).then((req) => await req.json())

const request = await fetch('http://localhost:3000', {
  headers: {
    Authorization: `JWT ${user.token}`,
  },
})
```

---

TITLE: Add NPM Script for PayloadCMS Type Generation with Custom Config Path
DESCRIPTION: This JSON snippet shows how to add an npm script to your `package.json` file for generating PayloadCMS types. It specifically demonstrates using the `PAYLOAD_CONFIG_PATH` environment variable to explicitly tell Payload where to find its configuration, which is crucial when the config is not in a default location (e.g., within a `src` directory).
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/typescript/generating-types.mdx#_snippet_10

LANGUAGE: JSON
CODE:

```
{
  "scripts": {
    "generate:types": "PAYLOAD_CONFIG_PATH=src/payload.config.ts payload generate:types"
  }
}
```

---

TITLE: Configure Payload Collection for File Uploads with Image Resizing
DESCRIPTION: This TypeScript code snippet demonstrates how to define a Payload Collection configuration to enable file uploads. It sets up a 'media' slug, specifies a static directory for uploads, and configures multiple `imageSizes` for automatic image resizing. It also restricts accepted file types to images using `mimeTypes` and adds an 'alt' text field.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/upload/overview.mdx#_snippet_0

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        // By specifying `undefined` or leaving a height undefined,
        // the image will be sized to a certain width,
        // but it will retain its original aspect ratio
        // and calculate a height automatically.
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}
```

---

TITLE: Payload Collection Access Control Create Function Arguments
DESCRIPTION: Outlines the arguments provided to the `create` access control function in Payload CMS, including the `req` object (with the authenticated `user`) and the `data` being used to create the document.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/access-control/collections.mdx#_snippet_6

LANGUAGE: APIDOC
CODE:

```
CollectionConfig.access.create(args):
  args:
    req: Request object containing the currently authenticated user.
    data: The data passed to create the document with.
```

---

TITLE: Configure Custom Filter Component for Payload Field
DESCRIPTION: Illustrates how to replace the default Filter Component for a Payload field by setting its path in the `admin.components.Filter` property. This component is used in the 'Filter By' dropdown of the List View.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_35

LANGUAGE: ts
CODE:

```
import type { Field } from 'payload'

export const myField: Field = {
  name: 'myField',
  type: 'text',
  admin: {
    components: {
      Filter: '/path/to/MyCustomFilterComponent'
    }
  }
}
```

---

TITLE: Custom Field Validation Using Context in PayloadCMS
DESCRIPTION: This example shows how to access the `ctx` (context) argument within a custom validation function to perform checks based on additional data, such as the currently authenticated user. The `ctx` object provides various properties like `user`, `data`, `siblingData`, `operation`, etc.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_10

LANGUAGE: TypeScript
CODE:

```
import type { Field } from 'payload';

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  validate: (val, { user }) =>
    Boolean(user) || 'You must be logged in to save this field'
};
```

---

TITLE: Payload CMS: Implement beforeRead Collection Hook
DESCRIPTION: Example TypeScript implementation of the `beforeRead` hook in Payload CMS. This hook runs before `find` and `findByID` operations are transformed for output, providing access to all locales and hidden fields via the `doc` argument.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/hooks/collections.mdx#_snippet_10

LANGUAGE: ts
CODE:

```
import type { CollectionBeforeReadHook } from 'payload'

const beforeReadHook: CollectionBeforeReadHook = async ({ doc }) => {
  return doc
}
```

---

TITLE: Implement Field Access Control Functions in Payload Collection Configuration
DESCRIPTION: Demonstrates how to define `create`, `read`, and `update` access control functions for a field within a Payload Collection configuration. These functions return a boolean to restrict access based on the authenticated user or other request data.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/access-control/fields.mdx#_snippet_1

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload';

export const Posts: CollectionConfig = {
  slug: 'posts',
  fields: [
    {
      name: 'title',
      type: 'text',
      // highlight-start
      access: {
        create: ({ req: { user } }) => { /* ... */ },
        read: ({ req: { user } }) => { /* ... */ },
        update: ({ req: { user } }) => { /* ... */ },
      },
      // highlight-end
    }
  ]
};
```

---

TITLE: Configure Custom Cell Component for Payload Field
DESCRIPTION: Shows how to override the default Cell Component for a Payload field by specifying its path in the `admin.components.Cell` property within the field configuration. This component is rendered in the List View table.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_33

LANGUAGE: ts
CODE:

```
import type { Field } from 'payload'

export const myField: Field = {
  name: 'myField',
  type: 'text',
  admin: {
    components: {
      Cell: '/path/to/MyCustomCellComponent'
    }
  }
}
```

---

TITLE: Define Custom Field Validation in PayloadCMS
DESCRIPTION: This snippet demonstrates how to set a basic custom validation function for a field in PayloadCMS. The `validate` function receives the field's `value` and should return `true` for valid input or a string error message for invalid input.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_9

LANGUAGE: TypeScript
CODE:

```
import type { Field } from 'payload';

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  validate: (value) => Boolean(value) || 'This field is required'
};
```

---

TITLE: Define Collections in Payload Configuration
DESCRIPTION: This snippet illustrates how to define collections within your Payload configuration file. Collections are specified as an array under the `collections` property of the `buildConfig` function.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/collections.mdx#_snippet_0

LANGUAGE: typescript
CODE:

```
import { buildConfig } from 'payload'

export default buildConfig({
  // ...
  collections: [
    // highlight-line
    // Your Collections go here
  ],
})
```

---

TITLE: Payload Collection Configuration Options API Reference
DESCRIPTION: This section provides a detailed API reference for the `CollectionConfig` object in Payload CMS. It lists all available properties, their purpose, and links to more extensive documentation where applicable. These options control various aspects of a collection, from admin panel behavior and access control to data structure and custom endpoints.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/collections.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:

```
CollectionConfig properties:
  admin: object
    Description: The configuration options for the Admin Panel. More details: #admin-options
  access: function
    Description: Provide Access Control functions to define exactly who should be able to do what with Documents in this Collection. More details: ../access-control/collections
  auth: object
    Description: Specify options if you would like this Collection to feature authentication. More details: ../authentication/overview
  custom: any
    Description: Extension point for adding custom data (e.g. for plugins)
  disableDuplicate: boolean
    Description: When true, do not show the "Duplicate" button while editing documents within this Collection and prevent `duplicate` from all APIs.
  defaultSort: string | string[]
    Description: Pass a top-level field to sort by default in the Collection List View. Prefix the name of the field with a minus symbol ("-") to sort in descending order. Multiple fields can be specified by using a string array.
  dbName: string
    Description: Custom table or Collection name depending on the Database Adapter. Auto-generated from slug if not defined.
  endpoints: array | boolean
    Description: Add custom routes to the REST API. Set to `false` to disable routes. More details: ../rest-api/overview#custom-endpoints
  fields: array
    Description: Array of field types that will determine the structure and functionality of the data stored within this Collection. More details: ../fields/overview
  graphQL: object
    Description: Manage GraphQL-related properties for this collection. More details: #graphql
  hooks: object
    Description: Entry point for Hooks. More details: ../hooks/overview#collection-hooks
  orderable: boolean
    Description: If true, enables custom ordering for the collection, and documents can be reordered via drag and drop. Uses fractional indexing for efficient reordering.
  labels: object
    Description: Singular and plural labels for use in identifying this Collection throughout Payload. Auto-generated from slug if not defined.
  enableQueryPresets: boolean
    Description: Enable query presets for this Collection. More details: ../query-presets/overview
  lockDocuments: boolean | object
    Description: Enables or disables document locking. By default, document locking is enabled. Set to an object to configure, or set to `false` to disable locking. More details: ../admin/locked-documents
```

---

TITLE: Configure Global Upload File Size Limit in Payload CMS
DESCRIPTION: This TypeScript example demonstrates how to increase the maximum allowed file size for uploads across the entire Payload CMS application. It modifies the `upload` property within the base Payload configuration, setting a new `fileSize` limit in bytes.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/upload/overview.mdx#_snippet_11

LANGUAGE: TypeScript
CODE:

```
import { buildConfig } from 'payload'

export default buildConfig({
  collections: [
    {
      slug: 'media',
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
      upload: true,
    },
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB, written in bytes
    },
  },
})
```

---

TITLE: Configuring Admin Options for Payload Global (TypeScript)
DESCRIPTION: This snippet demonstrates how to configure administrative options for a Payload Global by utilizing the `admin` property within the `GlobalConfig`. It shows the basic structure for adding custom settings like grouping, visibility, and component overrides to control the Global's behavior in the Admin Panel.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/globals.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:

```
import { GlobalConfig } from 'payload'

export const MyGlobal: GlobalConfig = {
  // ...
  admin: {
    // highlight-line
    // ...
  }
}
```

---

TITLE: Manage Form Field Values with Payload's useField Hook
DESCRIPTION: This TypeScript React example demonstrates how to create a custom input component that interacts with Payload's form system. It utilizes the `useField` hook from `@payloadcms/ui` to access and update the field's value, ensuring proper data flow within the Payload admin interface.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_31

LANGUAGE: tsx
CODE:

```
'use client'\nimport { useField } from '@payloadcms/ui'\n\nexport const CustomTextField: React.FC = () => {\n  const { value, setValue } = useField() // highlight-line\n\n  return <input onChange={(e) => setValue(e.target.value)} value={value} />\n}
```

---

TITLE: Install Vercel Blob Storage Adapter
DESCRIPTION: Installs the `@payloadcms/storage-vercel-blob` package using pnpm, a package manager.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/upload/storage-adapters.mdx#_snippet_0

LANGUAGE: sh
CODE:

```
pnpm add @payloadcms/storage-vercel-blob
```

---

TITLE: Define Update Access Control with External Function in Payload
DESCRIPTION: Demonstrates how to define an external update access control function. This example allows admin users full update access and other users to update only their own documents by comparing user ID with document ID.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/access-control/collections.mdx#_snippet_11

LANGUAGE: typescript
CODE:

```
import type { Access } from 'payload'

export const canUpdateUser: Access = ({ req: { user }, id }) => {
  // Allow users with a role of 'admin'
  if (user.roles && user.roles.some((role) => role === 'admin')) {
    return true
  }

  // allow any other users to update only oneself
  return user.id === id
}
```

---

TITLE: Configure Code Field in Payload CMS
DESCRIPTION: This snippet demonstrates how to define a Code field within Payload CMS's Field Config. It sets the `type` property to `code` to enable the specialized code editor interface in the Admin Panel for string storage.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/code.mdx#_snippet_0

LANGUAGE: typescript
CODE:

```
import type { Field } from 'payload'

export const MyBlocksField: Field = {
  // ...
  type: 'code', // highlight-line
}
```

---

TITLE: Set Static Default Value for Payload Field
DESCRIPTION: Explains how to set a static `defaultValue` for a field in Payload CMS, which pre-fills the field with an initial value in the Admin Panel and during API `create` or `update` operations.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_7

LANGUAGE: ts
CODE:

```
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text',
  name: 'myField',
  defaultValue: 'Hello, World!', // highlight-line
}
```

---

TITLE: Payload Cell Component Props API
DESCRIPTION: API documentation for properties passed to custom Cell Components in Payload CMS.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_34

LANGUAGE: APIDOC
CODE:

```
Cell Component Props:
  link: boolean
    Description: A boolean representing whether this cell should be wrapped in a link.
  onClick: function
    Description: A function that is called when the cell is clicked.
```

---

TITLE: Retrieve Specific Form Field State with useFormFields Hook
DESCRIPTION: The `useFormFields` hook allows components to selectively retrieve the state of specific form fields. Leveraging `use-context-selector`, it ensures that a component only re-renders when the state of the requested field changes, optimizing performance. The hook accepts a Redux-like selector to pinpoint the desired field, providing its current value and enabling calculations based on multiple field states.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/admin/react-hooks.mdx#_snippet_3

LANGUAGE: tsx
CODE:

```
'use client'\nimport { useFormFields } from '@payloadcms/ui'\n\nconst MyComponent: React.FC = () => {\n  // Get only the `amount` field state, and only cause a rerender when that field changes\n  const amount = useFormFields(([fields, dispatch]) => fields.amount)\n\n  // Do the same thing as above, but to the `feePercentage` field\n  const feePercentage = useFormFields(\n    ([fields, dispatch]) => fields.feePercentage,\n  )\n\n  if (\n    typeof amount?.value !== 'undefined' &&\n    typeof feePercentage?.value !== 'undefined'\n  ) {\n    return <span>The fee is ${(amount.value * feePercentage.value) / 100}</span>\n  }\n}
```

---

TITLE: Define Collection Access Property in Payload Config
DESCRIPTION: Illustrates the basic structure for adding access control to a Payload CMS collection by defining the `access` property within the `CollectionConfig`.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/access-control/collections.mdx#_snippet_0

LANGUAGE: typescript
CODE:

```
import type { CollectionConfig } from 'payload'

export const CollectionWithAccessControl: CollectionConfig = {
  // ...
  access: {
    // highlight-line
    // ...
  }
}
```

---

TITLE: Define a Basic Payload Document Query with TypeScript
DESCRIPTION: This TypeScript snippet demonstrates how to define a basic 'Where' clause for querying documents in Payload. It filters documents where the 'color' field exactly equals 'blue'. This query structure is consistent across Payload's Local, REST, and GraphQL APIs, allowing for precise data filtering.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/queries/overview.mdx#_snippet_0

LANGUAGE: TypeScript
CODE:

```
import type { Where } from 'payload';

const query: Where = {
  color: {
    equals: 'blue',
  },
};
```

---

TITLE: Example of All Available Global Hook Types
DESCRIPTION: Illustrates the common types of global hooks available in Payload CMS, including `beforeValidate`, `beforeChange`, `beforeRead`, `afterChange`, and `afterRead`, showing their placement within the `hooks` property of a GlobalConfig. Each hook accepts an array of synchronous or asynchronous functions.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/hooks/globals.mdx#_snippet_1

LANGUAGE: ts
CODE:

```
import type { GlobalConfig } from 'payload';

const GlobalWithHooks: GlobalConfig = {
  // ...
  // highlight-start
  hooks: {
    beforeValidate: [(args) => {...}],
    beforeChange: [(args) => {...}],
    beforeRead: [(args) => {...}],
    afterChange: [(args) => {...}],
    afterRead: [(args) => {...}]
  }
  // highlight-end
}
```

---

TITLE: Configure Field Type in Payload
DESCRIPTION: Demonstrates how to set the `type` property for a field in Payload CMS, matching it to a predefined Field Type to determine its appearance and behavior within the Admin Panel.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_3

LANGUAGE: ts
CODE:

```
import type { Field } from 'payload'

export const MyField: Field = {
  type: 'text', // highlight-line
  name: 'myField',
}
```

---

TITLE: Payload CMS Login GraphQL Mutation Example
DESCRIPTION: This snippet provides a GraphQL mutation example for logging into Payload CMS. It demonstrates how to pass `email` and `password` arguments to the `login` mutation and retrieve the user's email, token, and expiration.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/authentication/operations.mdx#_snippet_5

LANGUAGE: graphql
CODE:

```
mutation {
  login[collection-singular-label](email: "dev@payloadcms.com", password: "yikes") {
    user {
      email
    }
    exp
    token
  }
}
```

---

TITLE: Augment Default Field Validation in PayloadCMS
DESCRIPTION: This example demonstrates how to combine custom validation logic with Payload's default field validations. By calling the appropriate default validation function (e.g., `text`) within your custom function, you can augment rather than entirely replace the default behavior.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_12

LANGUAGE: TypeScript
CODE:

```
import { text } from 'payload/shared';

const field: Field = {
  name: 'notBad',
  type: 'text',
  validate: (val, args) => {
    if (val === 'bad') return 'This cannot be "bad"';
    return text(val, args);
  }
};
```

---

TITLE: Configuring Admin Options for Payload Group Field (TypeScript)
DESCRIPTION: This snippet demonstrates how to apply administrative options to a Payload CMS Group Field. The "admin" property allows customization of the field's appearance and behavior within the Admin Panel, inheriting default options from the base Field Admin Config.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/group.mdx#_snippet_1

LANGUAGE: TypeScript
CODE:

```
import type { Field } from 'payload'

export const MyGroupField: Field = {
  // ...
  admin: {
    // highlight-line
    // ...
  }
}
```

---

TITLE: FixedToolbarFeature - Payload CMS Lexical Editor
DESCRIPTION: Details the FixedToolbarFeature, a classic toolbar that remains pinned to the top and is always visible. It can be used concurrently with the inline toolbar.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/rich-text/overview.mdx#_snippet_7

LANGUAGE: APIDOC
CODE:

```
Feature Name: FixedToolbarFeature
Availability: No
Description: This classic toolbar is pinned to the top and always visible. Both inline and fixed toolbars can be enabled at the same time.
```

---

TITLE: Consolidating `useTitle` into `useDocumentInfo` Hook (React/TypeScript)
DESCRIPTION: This snippet shows the consolidation of the `useTitle` hook into `useDocumentInfo`. Instead of importing `useTitle` directly, the title is now accessed as a property from the object returned by `useDocumentInfo`.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/migration-guide/overview.mdx#_snippet_41

LANGUAGE: TypeScript
CODE:

```
'use client'
import { useDocumentInfo } from '@payloadcms/ui'

export const MyComponent = () => {
  const { title } = useDocumentInfo()

  // ...
}
```

---

TITLE: Configure Custom Description Component in Payload CMS Collection/Global
DESCRIPTION: Illustrates how to register a custom Description component by specifying its path within a Payload CMS Collection or Global configuration's `admin.components` property. This component is shared between Edit and List Views.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/custom-components/edit-view.mdx#_snippet_20

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload'

export const MyCollection: CollectionConfig = {
  // ...
  admin: {
    components: {
      // highlight-start
      Description: '/path/to/MyDescriptionComponent',
      // highlight-end
    },
  },
}
```

---

TITLE: Implement Asynchronous Field Validation in PayloadCMS
DESCRIPTION: This snippet demonstrates how to create asynchronous validation functions for fields in PayloadCMS collections. It highlights the use of the `async` keyword and the `event` property within the validation context (`ctx`) to conditionally execute expensive validations only on form submission, improving performance for `onChange` events. The example shows fetching data from an external API to validate a customer number.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_16

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload'

export const Orders: CollectionConfig = {
  slug: 'orders',
  fields: [
    {
      name: 'customerNumber',
      type: 'text',
      validate: async (val, { event }) => {
        if (event === 'onChange') {
          return true
        }

        // only perform expensive validation when the form is submitted
        const response = await fetch(`https://your-api.com/customers/${val}`)

        if (response.ok) {
          return true
        }

        return 'The customer number provided does not match any customers within our records.'
      },
    },
  ],
}
```

---

TITLE: Configure Static Field Description in Payload CMS
DESCRIPTION: This snippet demonstrates how to set a simple, static string as a field description in Payload CMS. The `admin.description` property within a field's configuration is used to provide additional information to editors, typically displayed beneath the field input.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_20

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload'

export const MyCollectionConfig: CollectionConfig = {
  // ...
  fields: [
    // ...
    {
      name: 'myField',
      type: 'text',
      admin: {
        description: 'Hello, world!', // highlight-line
      },
    },
  ],
}
```

---

TITLE: Define Read Access Control Inline in Payload Collection Config
DESCRIPTION: Demonstrates how to set up basic read access control directly within a Payload Collection Configuration, allowing only authenticated users to read documents by returning a boolean.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/access-control/collections.mdx#_snippet_7

LANGUAGE: typescript
CODE:

```
import type { CollectionConfig } from 'payload'

export const CollectionWithReadAccess: CollectionConfig = {
  // ...
  access: {
    read: ({ req: { user } }) => {
      return Boolean(user)
    },
  },
}
```

---

TITLE: Payload Email Adapter Base Configuration
DESCRIPTION: This defines the fundamental properties required for any email adapter integrated with Payload CMS. It specifies the default sender's name and email address that will appear on outgoing emails.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/email/overview.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:

```
EmailAdapter:
  properties:
    defaultFromName:
      type: string
      required: true
      description: The name part of the From field that will be seen on the delivered email
    defaultFromAddress:
      type: string
      required: true
      description: The email address part of the From field that will be used when delivering email
```

---

TITLE: Configure Payload with @payloadcms/db-postgres
DESCRIPTION: This snippet demonstrates how to configure Payload CMS to use the @payloadcms/db-postgres adapter. It requires a `pool` object with a `connectionString` pointing to your Postgres database URI for connection.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/database/postgres.mdx#_snippet_0

LANGUAGE: typescript
CODE:

```
import { postgresAdapter } from '@payloadcms/db-postgres'

export default buildConfig({
  // Configure the Postgres adapter here
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
```

---

TITLE: Payload CMS Login REST API Request and Response
DESCRIPTION: This snippet demonstrates how to perform a login operation using the REST API in Payload CMS. It shows a `fetch` request with `email` and `password` in the body, and the expected JSON response containing user details, token, and expiration.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/authentication/operations.mdx#_snippet_4

LANGUAGE: ts
CODE:

```
const res = await fetch('http://localhost:3000/api/[collection-slug]/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'dev@payloadcms.com',
    password: 'this-is-not-our-password...or-is-it?'
  })
})

const json = await res.json()

// JSON will be equal to the following:
/*
{
  user: {
    email: 'dev@payloadcms.com',
    createdAt: "2020-12-27T21:16:45.645Z",
    updatedAt: "2021-01-02T18:37:41.588Z",
    id: "5ae8f9bde69e394e717c8832"
  },
  token: '34o4345324...',
  exp: 1609619861
}
*/
```

---

TITLE: Payload CMS: Implement afterChange Collection Hook
DESCRIPTION: Example TypeScript implementation of the `afterChange` hook in Payload CMS. This hook runs after a document is created or updated, useful for post-save operations like recalculating statistics or syncing data to a CRM.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/hooks/collections.mdx#_snippet_8

LANGUAGE: ts
CODE:

```
import type { CollectionAfterChangeHook } from 'payload'

const afterChangeHook: CollectionAfterChangeHook = async ({ doc }) => {
  return doc
}
```

---

TITLE: Import Payload Field Type for TypeScript
DESCRIPTION: A basic TypeScript import statement demonstrating how to bring in the `Field` type from the PayloadCMS package. This type is fundamental for defining field configurations with strong type checking in PayloadCMS projects.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_45

LANGUAGE: ts
CODE:

```
import type { Field } from 'payload'
```

---

TITLE: Configuring CSRF Prevention in Payload (TypeScript)
DESCRIPTION: This configuration snippet demonstrates how to prevent CSRF attacks in Payload by defining a whitelist of trusted domains. The `csrf` array within the `buildConfig` function specifies which origins are permitted to send cookie-based authenticated requests, ensuring that only authorized frontends can interact with the Payload API.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/authentication/cookies.mdx#_snippet_2

LANGUAGE: TypeScript
CODE:

```
// payload.config.ts

import { buildConfig } from 'payload'

const config = buildConfig({
  serverURL: 'https://my-payload-instance.com',
  // highlight-start
  csrf: [
    // whitelist of domains to allow cookie auth from
    'https://your-frontend-app.com',
    'https://your-other-frontend-app.com',
    // `config.serverURL` is added by default if defined
  ],
  // highlight-end
  collections: [
    // collections here
  ],
})

export default config
```

---

TITLE: Dynamic Option Filtering with filterOptions in PayloadCMS Select Field
DESCRIPTION: This TypeScript code snippet demonstrates how to implement dynamic filtering of options for a PayloadCMS select field using the `filterOptions` property. The example shows how to restrict available options based on the value of another field (`data.disallowOption1`), preventing 'One' from being selected if `disallowOption1` is true. This function receives `options` and `data` as arguments and should return the filtered array of options.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/select.mdx#_snippet_3

LANGUAGE: typescript
CODE:

```
import type { Field } from 'payload';

export const MySelectField: Field = {
  // ...
  type: 'select',
  options: [
    {
      label: 'One',
      value: 'one',
    },
    {
      label: 'Two',
      value: 'two',
    },
    {
      label: 'Three',
      value: 'three',
    },
  ],
  filterOptions: ({ options, data }) =>
    data.disallowOption1
      ? options.filter(
          (option) =>
            (typeof option === 'string' ? options : option.value) !== 'one',
        )
      : options,
};
```

---

TITLE: Payload CMS: Configure Has Many Relationship
DESCRIPTION: Defines a one-to-many relationship field in a Payload CMS collection. This configuration allows linking a document to multiple documents from a single specified collection, using `hasMany: true`.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/relationship.mdx#_snippet_16

LANGUAGE: ts
CODE:

```
{
  slug: 'example-collection',
  fields: [
    {
      name: 'owners', // required
      type: 'relationship', // required
      relationTo: 'users', // required
      hasMany: true,
    }
  ]
}
```

---

TITLE: Payload CMS: Query Polymorphic Relationship by Collection Type
DESCRIPTION: Example of querying documents based on the `relationTo` (collection slug) within a polymorphic relationship using the Payload CMS REST API. This returns documents linked to a specific collection type.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/relationship.mdx#_snippet_15

LANGUAGE: APIDOC
CODE:

```
?where[owners.relationTo][equals]=organizations
```

---

TITLE: Implement Conditional Field Visibility in Payload CMS
DESCRIPTION: This code snippet demonstrates how to control the visibility of a field in Payload CMS using the `admin.condition` property. The `condition` function receives `data`, `siblingData`, and `ctx` arguments, enabling dynamic display logic based on other field values or contextual information. It returns a boolean to show or hide the field.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_23

LANGUAGE: ts
CODE:

```
{
  fields: [
    {
      name: 'enableGreeting',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'greeting',
      type: 'text',
      admin: {
        // highlight-start
        condition: (data, siblingData, { blockData, path, user }) => {
          if (data.enableGreeting) {
            return true
          } else {
            return false
          }
        },
        // highlight-end
      },
    },
  ]
}
```

---

TITLE: Payload CMS Access GraphQL Query Example
DESCRIPTION: This snippet provides an example GraphQL query to retrieve access permissions for collections, specifically focusing on read permissions for 'pages'. It demonstrates how to query access control data via GraphQL.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/authentication/operations.mdx#_snippet_1

LANGUAGE: graphql
CODE:

```
query {
  Access {
    pages {
      read {
        permission
      }
    }
  }
}
```

---

TITLE: Develop with Google Cloud Storage (GCS) Adapter Locally
DESCRIPTION: Instructions for setting up and running the Google Cloud Storage (GCS) adapter using a local Docker emulator. This involves navigating to the emulator directory, starting the Docker container, and launching the Payload development server configured for GCS.
SOURCE: https://github.com/payloadcms/payload/blob/main/packages/plugin-cloud-storage/docs/local-dev.md#_snippet_4

LANGUAGE: Shell
CODE:

```
cd ./src/adapters/gcs/emulator
```

LANGUAGE: Docker Compose
CODE:

```
docker-compose up -d
```

LANGUAGE: Yarn
CODE:

```
yarn dev:gcs
```

---

TITLE: Register Client Feature within PayloadCMS Server Feature
DESCRIPTION: Illustrates how to register a client-side feature within a server-side feature in PayloadCMS by providing an import path to the 'ClientFeature' prop. This links the client functionality to the server's entry point.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/rich-text/custom-features.mdx#_snippet_15

LANGUAGE: ts
CODE:

```
import { createServerFeature } from '@payloadcms/richtext-lexical'

export const MyFeature = createServerFeature({
  feature: {
    ClientFeature: './path/to/feature.client#MyClientFeature'
  },
  key: 'myFeature',
  dependenciesPriority: ['otherFeature']
})
```

---

TITLE: Payload CMS Field Configuration Options Reference
DESCRIPTION: A comprehensive reference of configuration properties for fields in Payload CMS, including their names and descriptions.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/rich-text.mdx#_snippet_0

LANGUAGE: APIDOC
CODE:

```
PayloadCMS.FieldConfigOptions:
  name:
    description: Property name for database storage and retrieval.
  label:
    description: Field label in Admin Panel or localized object.
  validate:
    description: Custom validation function for Admin Panel and backend.
  saveToJWT:
    description: Include top-level field data in user JWT if authentication is supported.
  hooks:
    description: Field Hooks to control logic for this field.
  access:
    description: Field Access Control for user permissions on this field's data.
  hidden:
    description: Restrict field visibility from all APIs; still saved to DB but not in API/Admin Panel.
  defaultValue:
    description: Data to be used as this field's default value.
  localized:
    description: Enable localization for this field (requires base config localization).
  required:
    description: Require this field to have a value.
  admin:
    description: Admin-specific configuration options.
  editor:
    description: Customize or override the rich text editor.
  custom:
    description: Extension point for adding custom data (e.g., for plugins).
```

---

TITLE: Integrating Custom Features into Payload CMS Lexical Editor
DESCRIPTION: This TypeScript example demonstrates how to configure the Lexical Editor in Payload CMS by passing a `features` prop. It shows how to include default features, customize the `LinkFeature` by adding a 'rel' attribute field, customize the `UploadFeature` with a 'caption' field, and integrate custom Payload blocks like 'Banner' and 'CallToAction' using `BlocksFeature`.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/rich-text/overview.mdx#_snippet_3

LANGUAGE: typescript
CODE:

```
import {
  BlocksFeature,
  LinkFeature,
  UploadFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Banner } from '../blocks/Banner'
import { CallToAction } from '../blocks/CallToAction'

{
  editor: lexicalEditor({
    features: ({ defaultFeatures, rootFeatures }) => [
      ...defaultFeatures,
      LinkFeature({
        // Example showing how to customize the built-in fields
        // of the Link feature
        fields: ({ defaultFields }) => [
          ...defaultFields,
          {
            name: 'rel',
            label: 'Rel Attribute',
            type: 'select',
            hasMany: true,
            options: ['noopener', 'noreferrer', 'nofollow'],
            admin: {
              description:
                'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
            },
          },
        ],
      }),
      UploadFeature({
        collections: {
          uploads: {
            // Example showing how to customize the built-in fields
            // of the Upload feature
            fields: [
              {
                name: 'caption',
                type: 'richText',
                editor: lexicalEditor(),
              },
            ],
          },
        },
      }),
      // This is incredibly powerful. You can re-use your Payload blocks
      // directly in the Lexical editor as follows:
      BlocksFeature({
        blocks: [Banner, CallToAction],
      }),
    ],
  })
}
```

---

TITLE: Configure Dynamic Field Description with Function in Payload CMS
DESCRIPTION: This example illustrates how to define a field description using a function in Payload CMS. The function receives a `t` argument for internationalization, allowing descriptions to be dynamically formatted based on the user's locale. These functions are executed on the server.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/overview.mdx#_snippet_21

LANGUAGE: ts
CODE:

```
import type { CollectionConfig } from 'payload'

export const MyCollectionConfig: CollectionConfig = {
  // ...
  fields: [
    // ...
    {
      name: 'myField',
      type: 'text',
      admin: {
        description: ({ t }) => `${t('Hello, world!')}`, // highlight-line
      },
    },
  ],
}
```

---

TITLE: Payload API `overrideLock` Option for Update/Delete Operations
DESCRIPTION: Explains the `overrideLock` boolean flag available in Payload's `update` and `delete` API operations. It details how this option affects enforcement of document locks, allowing users to either respect existing locks or bypass them.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/admin/locked-documents.mdx#_snippet_2

LANGUAGE: APIDOC
CODE:

```
API Operation Options:
  overrideLock:
    Type: boolean
    Default: true
    Description: Controls whether document locks are enforced for 'update' and 'delete' operations.
    Values:
      true: Ignores document locks; operation proceeds even if the document is locked. (Default)
      false: Enforces document locks; operation will not proceed if the document is locked by another user.
```

---

TITLE: Send Email Programmatically Using Payload sendEmail
DESCRIPTION: This example illustrates how to send an email programmatically within Payload CMS by calling `payload.sendEmail()`. It shows how to specify the recipient, subject, and the email body (either plain text or HTML).
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/email/overview.mdx#_snippet_8

LANGUAGE: ts
CODE:

```
// Example of sending an email
const email = await payload.sendEmail({
  to: 'test@example.com',
  subject: 'This is a test email',
  text: 'This is my message body',
})
```

---

TITLE: Create Custom Email Field Client Component for Payload CMS (TSX)
DESCRIPTION: This TSX snippet demonstrates how to create a custom client-side React component for the Payload CMS Email Field. It uses the `'use client'` directive, extends `EmailFieldClientComponent`, and renders the base `EmailField` component, passing all props directly.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/email.mdx#_snippet_7

LANGUAGE: tsx
CODE:

```
'use client'
import React from 'react'
import { EmailField } from '@payloadcms/ui'
import type { EmailFieldClientComponent } from 'payload'

export const CustomEmailFieldClient: EmailFieldClientComponent = (props) => {
  return <EmailField {...props} />
}
```

---

TITLE: Payload CMS Field Configuration Properties Reference
DESCRIPTION: This API documentation snippet provides a detailed reference for all available configuration properties that can be applied to fields within Payload CMS. Each property controls a specific aspect of the field's behavior, validation, storage, or presentation in the Admin Panel.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/fields/text.mdx#_snippet_1

LANGUAGE: APIDOC
CODE:

```
FieldConfigOptions:
  name:
    Description: To be used as the property name when stored and retrieved from the database.
    Notes: Required (*)
  label:
    Description: Text used as a field label in the Admin Panel or an object with keys for each language.
  unique:
    Description: Enforce that each entry in the Collection has a unique value for this field.
  minLength:
    Description: Used by the default validation function to ensure values are of a minimum character length.
  maxLength:
    Description: Used by the default validation function to ensure values are of a maximum character length.
  validate:
    Description: Provide a custom validation function that will be executed on both the Admin Panel and the backend.
  index:
    Description: Build an index for this field to produce faster queries. Set this field to 'true' if your users will perform queries on this field's data often.
  saveToJWT:
    Description: If this field is top-level and nested in a config supporting Authentication, include its data in the user JWT.
  hooks:
    Description: Provide Field Hooks to control logic for this field.
  access:
    Description: Provide Field Access Control to denote what users can see and do with this field's data.
  hidden:
    Description: Restrict this field's visibility from all APIs entirely. Will still be saved to the database, but will not appear in any API or the Admin Panel.
  defaultValue:
    Description: Provide data to be used for this field's default value.
  localized:
    Description: Enable localization for this field. Requires localization to be enabled in the Base config.
```

---

TITLE: Payload CMS Collection Configuration Properties
DESCRIPTION: Defines the configurable properties available for a Payload CMS collection, influencing its behavior, data management, and interaction with the system. Properties marked with an asterisk (\*) are required.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/collections.mdx#_snippet_3

LANGUAGE: APIDOC
CODE:

```
Collection Configuration Properties:
  slug*: Unique, URL-friendly string that will act as an identifier for this Collection.
  timestamps: Set to false to disable documents' automatically generated `createdAt` and `updatedAt` timestamps.
  typescript: An object with property `interface` as the text used in schema generation. Auto-generated from slug if not defined.
  upload: Specify options if you would like this Collection to support file uploads. For more, consult the Uploads documentation.
  versions: Set to true to enable default options, or configure with object properties. More details.
  defaultPopulate: Specify which fields to select when this Collection is populated from another document. More Details.
  indexes: Define compound indexes for this collection. This can be used to either speed up querying/sorting by 2 or more fields at the same time or to ensure uniqueness between several fields.
  forceSelect: Specify which fields should be selected always, regardless of the `select` query which can be useful that the field exists for access control / hooks
  disableBulkEdit: Disable the bulk edit operation for the collection in the admin panel and the REST API
```

---

TITLE: Accessing Environment Variables in Payload Config
DESCRIPTION: Demonstrates how to access environment variables, such as SERVER_URL, directly from `process.env` within a Payload configuration file in a TypeScript project.
SOURCE: https://github.com/payloadcms/payload/blob/main/docs/configuration/environment-vars.mdx#_snippet_2

LANGUAGE: ts
CODE:

```
import { buildConfig } from 'payload'

export default buildConfig({
  serverURL: process.env.SERVER_URL, // highlight-line
  // ...
})
```
