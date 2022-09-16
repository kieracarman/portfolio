import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true
    },
    subtitle: {
      type: 'string',
      description: 'The subtitle of the project',
      required: true
    },
    code: {
      type: 'string',
      description: 'The source code repository for the project'
    },
    demo: {
      type: 'string',
      description: 'The demo link for the project'
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Project]
})
