import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ImageDataLike } from 'gatsby-plugin-image/dist/src/components/hooks'

type props = {
  data: {
    mdx: {
      frontmatter: {
        title: string,
        date: string,
        hero_image: ImageDataLike,
        hero_image_alt: string
      },
    }
  },
  children: React.ReactNode,
}

const BlogPost = ({ data, children }: props) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  if (!image) {
    return;
  }
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        // image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = () => <Seo title="Super Cool Blog Posts" />

export default BlogPost
