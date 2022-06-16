import { graphql } from "gatsby";

export const query = graphql`
    fragment ItSolutionFour on ItSolution {
        title
        tagline
        banner_image {
            alt
            src {
                childImageSharp {
                    gatsbyImageData(
                        width: 100
                        formats: WEBP
                        layout: FULL_WIDTH
                        placeholder: TRACED_SVG
                    )
                }
            }
        }
        content {
            ...SolutionContent
        }
    }
`;
