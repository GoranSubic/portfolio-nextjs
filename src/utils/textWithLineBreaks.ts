import parse from 'html-react-parser';

interface Props {
    key: string;
    text: string;
    classes: string;
}

export default function TextWithLineBreaks(props: Props) {
  const idx=props.key;
  const textToParse = props.text;
  const classes = props.classes;

  const parsedText = textToParse.split('<paragraph>').map((paragraph, idx) => {
    const linesArr = paragraph.split('<nextline>').map((newline, idx) => {
      const parsedNewLine = newline;
      return (`<span key=${idx}>${parsedNewLine}</span>`);
    }).join('');
    const paragraphToParse = linesArr ?? paragraph;

    return parse(`<p className=${classes} key=${idx}>${paragraphToParse}</p>`);
  });

  return parsedText;
}
