// ./src/deskStructure.js
import Iframe from 'sanity-plugin-iframe-pane'
import { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType}
) => {
  // add relevant schema type you want to preview
    if (schemaType === 'page') {
        return S.document().views([
            S.view.form(),
        
        S.view
  .component(Iframe)
  .options({
    url: `${process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'}/api/preview`,
    // Optional: Set the default size
    defaultSize: `mobile`, // default `desktop`
    // Optional: Add a reload button, or reload on new document revisions
    reload: {
      button: true, // default `undefined`
    },
    // Optional: Pass attributes to the underlying `iframe` element:
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
    attributes: {}
  })
  .title('Preview')
]);
    }
}

export const deskStructure = (S: any) => S.list().title('Content').items([
  S.listItem()
    .title('Site config')
    .child(
      S.editor()
        .id('site-config')
        .schemaType('site-config')
        .documentId('site-config')
    ),
  ...S.documentTypeListItems().filter((listItem: any) => !['site-config'].includes(listItem.getId()))
])
  