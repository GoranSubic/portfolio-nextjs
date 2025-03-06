import parse from 'html-react-parser';

interface Props {
    text: string;
    classParagraphBlock: string;
    classListIcon?: string;
}

export default function TextWithLineBreaks(props: Props) {
  const textToParse = props.text;
  const classParagraphBlock = props.classParagraphBlock;
  const classListIcon = props.classListIcon;

  const parsedText = textToParse.split('<paragraph>').map((paragraph, idx) => {
    const linesArr = paragraph.split('<nextline>').map((newline, idx) => {
      const parsedNewLine = newline;
      return (`<span key=${idx}>${parsedNewLine}</span>`);
    }).join('');

    let paragraphToParse = linesArr ?? paragraph;
    if (classListIcon !== undefined) {
      paragraphToParse = paragraphToParse.replaceAll("<lista>", `<span className=${classListIcon}></span>`);
    }

    return parse(`<p className=${classParagraphBlock} key=${idx}>${paragraphToParse}</p>`);
  });

  return parsedText;
}
