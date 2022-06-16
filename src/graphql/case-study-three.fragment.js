import { graphql } from "gatsby";

export const query = graphql`
    fragment CaseStudyThree on CaseStudy {
        banner_image {
            alt
            src {
                childImageSharp {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        quality: 100
                        placeholder: TRACED_SVG
                        formats: WEBP
                    )
                }
            }
        }
        logo {
            alt
            src {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100
                        placeholder: TRACED_SVG
                        formats: WEBP
                    )
                }
            }
        }
        tagline
        content {
            section
            headings {
                level
                content
            }
            texts {
                content
            }
            tags
            client {
                name
                designation
                company
            }
            section_title {
                title
                subtitle
            }
            video_button {
                link
            }
            buttons {
                id
                path
                content
                variant
                color
                shape
                size
                hoverStyle
                disableHover
                icon
                icondistance
                iconposition
                fontWeight
            }
            images {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 100
                            formats: WEBP
                            placeholder: TRACED_SVG
                        )
                    }
                }
            }
            items {
                id
                title
                description
                name
                designation
                rating
                images {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                quality: 100
                                formats: WEBP
                                placeholder: TRACED_SVG
                            )
                        }
                    }
                }
            }
        }
    }
`;
