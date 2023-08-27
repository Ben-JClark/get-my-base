interface Props {
  id: string;
  title: string;
  creator: string;
  rockets: number;
  exploits: boolean;
}

/**
 * @returns A base with its details and images displayed in a bootstrap card format
 */
function BaseCard({ id, title, creator, rockets, exploits }: Props) {
  return (
    <>
      <p>
        id:{id} title:{title} creator:{creator} rockets:{rockets} exploits:
        {exploits == true ? "Expoints" : "No Exploits"}
      </p>
    </>
  );
}

export default BaseCard;
