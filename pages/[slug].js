import {useRouter} from "next/router";
import SyntaxHighlighter from "react-syntax-highlighter";
import docco from "react-syntax-highlighter/dist/cjs/styles/hljs/docco";
import Container from 'react-bootstrap/Container'
import he from 'he';

export default function Snippet({ data }) {
    const router = useRouter()
    const { slug } = router.query

    return (
        <Container>
            <SyntaxHighlighter language={data.language} style={docco}>
                {he.decode(data.code)}
            </SyntaxHighlighter>
        </Container>
    )
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`https://api.zacharymyers.com/api/snippets/${params['slug']}`)
    const data = await res.json()

    return { props: { data }}
}