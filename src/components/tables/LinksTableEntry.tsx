import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LinksTableEntryProps {
  originalUrl: string;
  shortUrlPath: string;
  visitCount: number;
}

export default function LinksTableEntry({
  originalUrl,
  shortUrlPath,
  visitCount,
}: LinksTableEntryProps) {
  const finalUrl = process.env.NEXT_PUBLIC_WEB_URL + `/${shortUrlPath}`;
  const handleClipboard = () => {
    navigator.clipboard.writeText(finalUrl);
  };
  return (
    <tr>
      <td className="px-6 py-5 flex gap-2 items-center">
        {finalUrl}
        <button
          className="w-9 h-9 flex items-center justify-center rounded-large bg-blueish bg-opacity-70 active:bg-gray-500 cursor-pointer"
          onClick={handleClipboard}
        >
          <FontAwesomeIcon width={12} icon={faCopy} />
        </button>
      </td>
      <td>{originalUrl}</td>
      <td>{visitCount}</td>
    </tr>
  );
}
