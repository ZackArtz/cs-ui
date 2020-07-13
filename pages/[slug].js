import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-eighties";
import Container from '@material-ui/core/Container'
import he from 'he';
import Cookies from 'js-cookie';

export default function Snippet({ snippet }) {
    return (
        <Container>
            <SyntaxHighlighter language={snippet ? snippet.lang : 'js'} style={theme}>
                {he.decode(snippet ? snippet.code : '')}
            </SyntaxHighlighter>
        </Container>
    )
}

// This function gets called at build time
export async function getStaticPaths() {
    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [{ params: { slug: 'bbd613ba-bfd3-4900-934d-cf71e631bd1c' } }, { params: { slug: 'f87179f5-3015-4d85-b41f-1b555ffbc398' } }],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: true,
    }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    const token = Cookies.get('token');
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://api.zacharymyers.com/api/snippets/${params.slug}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    const snippet = await res.json()

    // Pass post data to the page via props
    return { props: { snippet } }
}