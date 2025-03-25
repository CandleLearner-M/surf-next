import Markdown from "react-markdown";

function Paragraph({ paragraph }: { paragraph: string }) {
  return (
    <div style={{fontSize: "2rem", marginBottom: "5rem", padding: '1rem 3rem'}}>
      <Markdown>{paragraph}</Markdown>
    </div>
  );
}
export default Paragraph;
